/**
 * Igano smoke driver — Playwright script that starts/uses a running dev server,
 * exercises the EN/GR language toggle, and saves screenshots.
 *
 * Usage:
 *   npx playwright install chromium   # first time only
 *   node .claude/skills/run-igano/smoke.mjs [--url http://localhost:3000]
 *
 * Screenshots land in .claude/skills/run-igano/screenshots/
 */

import { chromium } from '@playwright/test';
import { existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)));
const SS_DIR = join(ROOT, 'screenshots');
mkdirSync(SS_DIR, { recursive: true });

const BASE_URL = process.argv.includes('--url')
  ? process.argv[process.argv.indexOf('--url') + 1]
  : 'http://localhost:3000';

async function ss(page, name) {
  const p = join(SS_DIR, `${name}.png`);
  await page.screenshot({ path: p, fullPage: false });
  console.log(`  screenshot → ${p}`);
}

(async () => {
  console.log(`\n▶ igano smoke — ${BASE_URL}\n`);

  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();

  // ── 1. Load page ─────────────────────────────────────────────────────────
  console.log('1. Loading home page …');
  const res = await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  console.log(`   HTTP ${res.status()}`);
  if (res.status() >= 400) throw new Error(`Bad status: ${res.status()}`);
  await ss(page, '01-home-en');

  // ── 2. Verify key EN text visible ────────────────────────────────────────
  console.log('2. Checking English content …');
  await page.waitForSelector('text=Order Online', { timeout: 5000 });
  await page.waitForSelector('text=Bestsellers', { timeout: 5000 });
  console.log('   ✓ EN navbar and section labels present');

  // ── 3. Toggle to Greek ───────────────────────────────────────────────────
  console.log('3. Clicking language toggle (EN → ΕΛ) …');
  // The toggle button contains "ΕΛ" text
  const toggleBtn = page.locator('button').filter({ hasText: /ΕΛ/i }).first();
  await toggleBtn.waitFor({ timeout: 5000 });
  await toggleBtn.click();

  // wait for greek text to appear
  await page.waitForSelector('text=Μενού', { timeout: 5000 });
  console.log('   ✓ Greek nav link "Μενού" appeared');
  await ss(page, '02-home-gr');

  // ── 4. Verify Greek content in key sections ───────────────────────────────
  console.log('4. Checking Greek content …');
  await page.waitForSelector('text=Τα αγαπημένα', { timeout: 5000 });
  await page.waitForSelector('text=Παράγγειλε', { timeout: 5000 });
  console.log('   ✓ Greek section labels and buttons present');

  // ── 5. Scroll to location section and check hours ────────────────────────
  console.log('5. Checking location section in Greek …');
  await page.locator('#location').scrollIntoViewIfNeeded();
  await page.waitForSelector('text=Δευτέρα', { timeout: 5000 });
  await ss(page, '03-location-gr');
  console.log('   ✓ Greek opening hours visible');

  // ── 6. Toggle back to English, verify localStorage persists ─────────────
  console.log('6. Toggling back to English …');
  const toggleBtn2 = page.locator('button').filter({ hasText: /ΕΛ/i }).first();
  await toggleBtn2.click();
  await page.waitForSelector('text=Order Online', { timeout: 5000 });
  console.log('   ✓ Back to English');
  await ss(page, '04-home-en-again');

  // ── 7. Reload to verify localStorage persists ────────────────────────────
  console.log('7. Reloading to verify persistence …');
  // Switch to Greek first, then reload
  const toggleBtn3 = page.locator('button').filter({ hasText: /ΕΛ/i }).first();
  await toggleBtn3.click();
  await page.waitForSelector('text=Μενού', { timeout: 5000 });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForSelector('text=Μενού', { timeout: 6000 });
  console.log('   ✓ Greek preference persisted across reload');
  await ss(page, '05-gr-after-reload');

  // ── 8. Mobile viewport smoke ─────────────────────────────────────────────
  console.log('8. Mobile viewport (390×844) …');
  await ctx.close();
  const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobilePage = await mobileCtx.newPage();
  await mobilePage.goto(BASE_URL, { waitUntil: 'networkidle' });
  // Switch to Greek on mobile
  const mobileToggle = mobilePage.locator('button').filter({ hasText: /ΕΛ/i }).first();
  await mobileToggle.click();
  await mobilePage.waitForSelector('text=Παράγγειλε', { timeout: 5000 });
  await mobilePage.screenshot({ path: join(SS_DIR, '06-mobile-gr.png'), fullPage: false });
  console.log(`  screenshot → ${join(SS_DIR, '06-mobile-gr.png')}`);
  console.log('   ✓ Toggle works on mobile viewport');

  await browser.close();
  console.log('\n✅ All checks passed\n');
})().catch(err => {
  console.error('\n❌', err.message);
  process.exit(1);
});
