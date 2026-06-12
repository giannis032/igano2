'use client';

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Phone,
  Clock,
  Bike,
  Star,
  ArrowUpRight,
  UtensilsCrossed,
  Flame,
  Leaf,
  ShoppingBag,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* Translations                                                         */
/* ------------------------------------------------------------------ */

const translations = {
  en: {
    nav: {
      subtitle: "Noodles & Buns",
      menu: "Menu",
      location: "Location",
      orderOnline: "Order Online",
    },
    hero: {
      badge: "Asian street food · Kavala",
      h1line3: "in Kavala",
      body: "Authentic street food, made fresh in front of you. Build your wok noodles, grab a steamed bao, and go — or let us bring it to your door.",
      orderWolt: "Order on Wolt",
      orderEfood: "Order on E-food",
      reviews: "4.7 · 178 reviews",
      priceRange: "€ 5–10 per person",
      openHours: "Open daily until late",
      freshBadge: "FRESH",
      freshSub: "wok daily",
    },
    menu: {
      eyebrow: "Bestsellers",
      headingMain: "Pick your",
      headingAccent: "craving",
      fullMenuLink: "Full menu on Wolt",
    },
    menuItems: [
      {
        title: "Noodles",
        desc: "Wok-fried to order over high flame — pick your noodle, sauce and topping.",
        tags: ["Chicken teriyaki", "Beef hoisin", "Veggie sweet & sour"],
        iconLabel: "Wok-fired",
        alt: "Noodles",
      },
      {
        title: "Bao Buns",
        desc: "Pillow-soft steamed buns with slow-cooked fillings and crunchy slaw.",
        tags: ["Crispy chicken bao", "Pulled pork bao", "Tofu bao"],
        iconLabel: "Veggie options",
        alt: "Bao Buns",
      },
    ],
    location: {
      eyebrow: "Find us",
      heading: "In the heart of Kavala",
      addressLabel: "Address",
      addressValue: "Dagkli 4, Kavala 654 03",
      addressNote: "Outdoor seating available",
      phoneLabel: "Phone",
      phoneNote: "Call for takeaway orders",
      hoursLabel: "Opening hours",
      hours: [
        { days: "Monday – Friday", time: "12:00 – 01:00" },
        { days: "Saturday", time: "12:00 – 24:00" },
        { days: "Sunday", time: "12:00 – 01:00" },
      ],
      delivery: "Delivery & takeaway via Wolt and E-food",
      openMaps: "Open in Google Maps",
    },
    cta: {
      heading: "Hungry? Your order is",
      headingAccent: "20 minutes",
      headingSuffix: "away",
      orderWolt: "Order on Wolt",
      orderEfood: "Order on E-food",
    },
    footer: {
      tagline: "Noodles & Buns · Kavala",
      rightsReserved: "All rights reserved.",
      address: "Dagkli 4, Kavala 654 03 · 251 062 1809",
    },
    logoAlt: "Igano Logo",
    foodAlt: "Igano food",
  },
  gr: {
    nav: {
      subtitle: "Noodles & Buns",
      menu: "Μενού",
      location: "Τοποθεσία",
      orderOnline: "Παράγγειλε",
    },
    hero: {
      badge: "Ασιατικό street food · Καβάλα",
      h1line3: "στην Καβάλα",
      body: "Αυθεντικό street food, φτιαγμένο φρέσκο μπροστά σου. Διάλεξε τα noodles σου, πάρε ένα bao bun και πήγαινε — ή αφέσε μας να σου το φέρουμε.",
      orderWolt: "Παράγγειλε στο Wolt",
      orderEfood: "Παράγγειλε στο E-food",
      reviews: "4,7 · 178 κριτικές",
      priceRange: "€ 5–10 το άτομο",
      openHours: "Ανοιχτά καθημερινά μέχρι αργά",
      freshBadge: "ΦΡΕΣΚΟ",
      freshSub: "wok καθημερινά",
    },
    menu: {
      eyebrow: "Τα αγαπημένα",
      headingMain: "Διάλεξε",
      headingAccent: "αυτό που σου λείπει",
      fullMenuLink: "Πλήρες μενού στο Wolt",
    },
    menuItems: [
      {
        title: "Noodles",
        desc: "Τηγανισμένα σε wok επί παραγγελία σε δυνατή φλόγα — διάλεξε noodle, σάλτσα και topping.",
        tags: ["Κοτόπουλο teriyaki", "Μοσχάρι hoisin", "Veggie γλυκόξινο"],
        iconLabel: "Wok",
        alt: "Noodles",
      },
      {
        title: "Bao Buns",
        desc: "Αέρινα αχνιστά buns με αργομαγειρεμένη γέμιση και τραγανή σαλάτα.",
        tags: ["Crispy κοτόπουλο bao", "Pulled pork bao", "Tofu bao"],
        iconLabel: "Veggie επιλογές",
        alt: "Bao Buns",
      },
    ],
    location: {
      eyebrow: "Βρες μας",
      heading: "Στην καρδιά της Καβάλας",
      addressLabel: "Διεύθυνση",
      addressValue: "Δαγκλή 4, Καβάλα 654 03",
      addressNote: "Διαθέσιμα εξωτερικά τραπέζια",
      phoneLabel: "Τηλέφωνο",
      phoneNote: "Κάλεσε για takeaway παραγγελία",
      hoursLabel: "Ώρες λειτουργίας",
      hours: [
        { days: "Δευτέρα – Παρασκευή", time: "12:00 – 01:00" },
        { days: "Σάββατο", time: "12:00 – 24:00" },
        { days: "Κυριακή", time: "12:00 – 01:00" },
      ],
      delivery: "Delivery & takeaway μέσω Wolt και E-food",
      openMaps: "Άνοιγμα στους Χάρτες",
    },
    cta: {
      heading: "Πεινάς; Η παραγγελία σου είναι",
      headingAccent: "20 λεπτά",
      headingSuffix: "μακριά",
      orderWolt: "Παράγγειλε στο Wolt",
      orderEfood: "Παράγγειλε στο E-food",
    },
    footer: {
      tagline: "Noodles & Buns · Καβάλα",
      rightsReserved: "Με επιφύλαξη παντός δικαιώματος.",
      address: "Δαγκλή 4, Καβάλα 654 03 · 251 062 1809",
    },
    logoAlt: "Λογότυπο Igano",
    foodAlt: "Φαγητό Igano",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Delivery URLs                                                        */
/* ------------------------------------------------------------------ */

const WOLT_URL = "https://wolt.com/el/grc/kavala/restaurant/igano";
const EFOOD_URL = "https://www.e-food.gr/delivery/kavala/igano-7428989";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=IGANO+Noodles+and+Buns+Dagkli+4+Kavala";

/* ------------------------------------------------------------------ */
/* Brand icons                                                          */
/* ------------------------------------------------------------------ */

function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Logo badge                                                           */
/* ------------------------------------------------------------------ */

function LogoBadge({ size = 44, alt }: { size?: number; alt: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-full select-none shrink-0 overflow-hidden"
      style={{
        width: size,
        height: size,
        background: "var(--ink)",
        color: "var(--paper)",
      }}
    >
      <img
        src="/logo.png"
        alt={alt}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                              */
/* ------------------------------------------------------------------ */

function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-semibold text-[15px] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        outlineColor: "var(--amber)",
        boxShadow: "0 10px 24px rgba(24,24,22,0.18)",
      }}
    >
      {children}
      <ArrowUpRight
        size={18}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        style={{ color: "var(--amber)" }}
      />
    </a>
  );
}

function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-semibold text-[15px] border-2 transition-colors duration-200 hover:bg-[#181816] hover:text-[#f2efe9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        borderColor: "var(--ink)",
        color: "var(--ink)",
        outlineColor: "var(--amber)",
      }}
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Language toggle                                                      */
/* ------------------------------------------------------------------ */

function LangToggle() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to Greek' : 'Αλλαγή σε Αγγλικά'}
      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{ outlineColor: "var(--amber)" }}
    >
      <span style={{ color: language === 'en' ? 'var(--ink)' : 'var(--ink-soft)' }}>EN</span>
      <span style={{ color: "var(--line)" }}>/</span>
      <span style={{ color: language === 'gr' ? 'var(--ink)' : 'var(--ink-soft)' }}>ΕΛ</span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const menuItems = [
    {
      title: t.menuItems[0].title,
      desc: t.menuItems[0].desc,
      art: (
        <img
          src="/noodles.png"
          alt={t.menuItems[0].alt}
          className="w-full h-auto object-cover rounded-xl"
        />
      ),
      tags: t.menuItems[0].tags,
      icon: <Flame size={16} />,
      iconLabel: t.menuItems[0].iconLabel,
    },
    {
      title: t.menuItems[1].title,
      desc: t.menuItems[1].desc,
      art: (
        <img
          src="/bao.png"
          alt={t.menuItems[1].alt}
          className="w-full h-auto object-cover rounded-xl"
        />
      ),
      tags: t.menuItems[1].tags,
      icon: <Leaf size={16} />,
      iconLabel: t.menuItems[1].iconLabel,
    },
  ];

  // ── Refs ───────────────────────────────────────────────────────────
  const rootRef        = useRef<HTMLDivElement>(null);
  const heroBadgeRef   = useRef<HTMLParagraphElement>(null);
  const heroH1Ref      = useRef<HTMLHeadingElement>(null);
  const heroBodyRef    = useRef<HTMLParagraphElement>(null);
  const heroCtaRef     = useRef<HTMLDivElement>(null);
  const heroStatsRef   = useRef<HTMLDivElement>(null);
  const menuSectionRef = useRef<HTMLElement>(null);
  const locationInfoRef = useRef<HTMLDivElement>(null);
  const locationMapRef  = useRef<HTMLDivElement>(null);
  const ctaBandRef     = useRef<HTMLElement>(null);

  // ── Animations ─────────────────────────────────────────────────────
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Hero stagger load-in
      const heroEls = [
        heroBadgeRef.current,
        heroH1Ref.current,
        heroBodyRef.current,
        heroCtaRef.current,
        heroStatsRef.current,
      ].filter(Boolean) as HTMLElement[];

      if (heroEls.length) {
        gsap.set(heroEls, { y: 30, opacity: 0 });
        gsap.to(heroEls, {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power2.out",
        });
      }

      // Menu section: heading + cards stagger on scroll
      if (menuSectionRef.current) {
        const heading = menuSectionRef.current.querySelector("h2");
        const cards = Array.from(menuSectionRef.current.querySelectorAll("article"));
        const targets = [heading, ...cards].filter(Boolean) as HTMLElement[];
        gsap.set(targets, { y: 50, opacity: 0 });
        gsap.to(targets, {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power2.out",
          scrollTrigger: {
            trigger: menuSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // Location section: info column + map stagger on scroll
      const locationTargets = [locationInfoRef.current, locationMapRef.current]
        .filter(Boolean) as HTMLElement[];

      if (locationTargets.length) {
        gsap.set(locationTargets, { y: 50, opacity: 0 });
        gsap.to(locationTargets, {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out",
          scrollTrigger: {
            trigger: locationTargets[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // CTA band on scroll
      if (ctaBandRef.current) {
        gsap.set(ctaBandRef.current, { y: 50, opacity: 0 });
        gsap.to(ctaBandRef.current, {
          y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
          scrollTrigger: {
            trigger: ctaBandRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} style={{ background: "var(--paper)", color: "var(--ink)" }}>
      {/* ================= NAVBAR ================= */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          background: "rgba(242,239,233,0.85)",
          borderColor: "var(--line)",
        }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <LogoBadge size={42} alt={t.logoAlt} />
            <div className="leading-tight">
              <span className="font-display text-xl tracking-[0.18em]">
                IGANO
              </span>
              <span className="hidden sm:block text-[11px] uppercase tracking-[0.22em] text-orange-500">
                {t.nav.subtitle}
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70 transition-opacity">
              {t.nav.menu}
            </a>
            <a href="#location" className="hover:opacity-70 transition-opacity">
              {t.nav.location}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <LangToggle />
            <a
              href="#order"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--amber)",
                color: "var(--ink)",
                boxShadow: "0 6px 18px var(--amber-glow)",
              }}
            >
              <ShoppingBag size={16} />
              {t.nav.orderOnline}
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 pt-14 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-20 lg:pb-24">
            <div>
              <p
                ref={heroBadgeRef}
                className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{
                  borderColor: "var(--wood)",
                  color: "var(--ink-soft)",
                  background: "var(--wood-light)",
                }}
              >
                {t.hero.badge}
              </p>

              <h1 ref={heroH1Ref} className="font-display uppercase leading-[0.95] text-[clamp(3rem,9vw,5.5rem)]">
                Noodles
                <br />
                <span className="sign-glow">&amp;</span> Buns
                <br />
                {t.hero.h1line3}
              </h1>

              <p
                ref={heroBodyRef}
                className="mt-6 max-w-md text-base sm:text-lg leading-relaxed"
                style={{ color: "var(--ink-soft)" }}
              >
                {t.hero.body}
              </p>

              <div
                ref={heroCtaRef}
                id="order"
                className="mt-8 flex flex-col sm:flex-row gap-3 scroll-mt-28"
              >
                <PrimaryLink href={WOLT_URL}>
                  <Bike size={18} />
                  {t.hero.orderWolt}
                </PrimaryLink>
                <SecondaryLink href={EFOOD_URL}>
                  <Bike size={18} />
                  {t.hero.orderEfood}
                </SecondaryLink>
              </div>

              <div
                ref={heroStatsRef}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium"
                style={{ color: "var(--ink-soft)" }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <Star size={16} fill="var(--amber)" stroke="var(--amber)" />
                  {t.hero.reviews}
                </span>
                <span>{t.hero.priceRange}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={16} />
                  {t.hero.openHours}
                </span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div
                className="relative overflow-hidden rounded-[2rem] border-[10px] aspect-[4/5] max-h-[520px] w-full"
                style={{
                  borderColor: "var(--wood)",
                  background:
                    "linear-gradient(160deg, var(--wood-light) 0%, var(--paper-soft) 55%, var(--wood-light) 100%)",
                  boxShadow: "0 30px 60px rgba(24,24,22,0.18)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/igano.png"
                    alt={t.foodAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className="absolute -top-4 -right-2 sm:-right-4 rotate-6 rounded-2xl px-4 py-3 text-center"
                style={{
                  background: "var(--ink)",
                  color: "var(--amber)",
                  boxShadow: "0 12px 28px rgba(24,24,22,0.3)",
                }}
              >
                <div className="font-display text-lg leading-none">
                  {t.hero.freshBadge}
                </div>
                <div
                  className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--paper)" }}
                >
                  {t.hero.freshSub}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MENU SNEAK PEEK ================= */}
        <section
          ref={menuSectionRef}
          id="menu"
          className="scroll-mt-24"
          style={{ background: "var(--ink)" }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 lg:py-24">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p
                  className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em]"
                  style={{ color: "var(--wood)" }}
                >
                  {t.menu.eyebrow}
                </p>
                <h2
                  className="font-display uppercase text-[clamp(2rem,5vw,3.25rem)] leading-none"
                  style={{ color: "var(--paper)" }}
                >
                  {t.menu.headingMain}{" "}
                  <span className="sign-glow">{t.menu.headingAccent}</span>
                </h2>
              </div>
              <a
                href={WOLT_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ color: "var(--amber)" }}
              >
                {t.menu.fullMenuLink} <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {menuItems.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-[1.75rem] p-6 sm:p-8 transition-transform duration-200 hover:-translate-y-1 flex flex-col"
                  style={{ background: "var(--paper)" }}
                >
                  <div
                    className="mb-6 flex aspect-[16/10] rounded-2xl overflow-hidden border"
                    style={{
                      background:
                        "linear-gradient(150deg, var(--wood-light), var(--paper-soft))",
                      borderColor: "var(--line)",
                    }}
                  >
                    <div className="h-full w-full">{item.art}</div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display uppercase text-2xl tracking-wide">
                      {item.title}
                    </h3>
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider shrink-0"
                      style={{
                        background: "var(--wood-light)",
                        color: "var(--ink-soft)",
                      }}
                    >
                      {item.icon}
                      {item.iconLabel}
                    </span>
                  </div>

                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    {item.desc}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-lg border px-3 py-1.5 text-xs font-medium"
                        style={{
                          borderColor: "var(--line)",
                          color: "var(--ink-soft)",
                        }}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INFO & LOCATION ================= */}
        <section id="location" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 lg:py-24">
            <p
              className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--wood-deep)" }}
            >
              {t.location.eyebrow}
            </p>
            <h2 className="font-display uppercase text-[clamp(2rem,5vw,3.25rem)] leading-none mb-10">
              {t.location.heading}
            </h2>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Info cards */}
              <div ref={locationInfoRef} className="grid gap-4 content-start">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-2xl border p-5 transition-colors hover:bg-[#e9dfcd66]"
                  style={{ borderColor: "var(--line)", background: "#fff" }}
                >
                  <span
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--wood-light)" }}
                  >
                    <MapPin size={18} />
                  </span>
                  <span>
                    <span
                      className="block text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      {t.location.addressLabel}
                    </span>
                    <span className="mt-1 block font-semibold">
                      {t.location.addressValue}
                    </span>
                    <span
                      className="block text-sm"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      {t.location.addressNote}
                    </span>
                  </span>
                </a>

                <a
                  href="tel:+302510621809"
                  className="flex items-start gap-4 rounded-2xl border p-5 transition-colors hover:bg-[#e9dfcd66]"
                  style={{ borderColor: "var(--line)", background: "#fff" }}
                >
                  <span
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--wood-light)" }}
                  >
                    <Phone size={18} />
                  </span>
                  <span>
                    <span
                      className="block text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      {t.location.phoneLabel}
                    </span>
                    <span className="mt-1 block font-semibold">251 062 1809</span>
                    <span
                      className="block text-sm"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      {t.location.phoneNote}
                    </span>
                  </span>
                </a>

                <div
                  className="rounded-2xl border p-5"
                  style={{ borderColor: "var(--line)", background: "#fff" }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: "var(--wood-light)" }}
                    >
                      <Clock size={18} />
                    </span>
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      {t.location.hoursLabel}
                    </span>
                  </div>
                  <dl className="mt-4 space-y-2 text-sm">
                    {t.location.hours.map((h) => (
                      <div
                        key={h.days}
                        className="flex items-center justify-between gap-4 border-b pb-2 last:border-0 last:pb-0"
                        style={{ borderColor: "var(--line)" }}
                      >
                        <dt className="font-medium">{h.days}</dt>
                        <dd className="font-semibold tabular-nums">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div
                  className="flex items-center gap-3 rounded-2xl p-5 text-sm font-medium"
                  style={{ background: "var(--ink)", color: "var(--paper)" }}
                >
                  <Bike size={18} style={{ color: "var(--amber)" }} />
                  {t.location.delivery}
                </div>
              </div>

              {/* Map */}
              <div ref={locationMapRef} className="flex flex-col gap-3">
                <div
                  className="relative min-h-[320px] flex-1 overflow-hidden rounded-[1.75rem] border"
                  style={{
                    borderColor: "var(--line)",
                    background: "var(--paper-soft)",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.0894774864582!2d24.40390467551012!3d40.935706123891144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aebb0037d112a3%3A0xd8248b82bcf59f66!2sIGANO%20-%20Noodles%20and%20Buns!5e0!3m2!1sen!2sgr!4v1781127770716!5m2!1sen!2sgr"
                    width="100%"
                    height="100%"
                    title={language === 'gr' ? 'Η τοποθεσία του IGANO στον Google Maps' : 'IGANO location on Google Maps'}
                    className="absolute inset-0 h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ background: "var(--amber)", color: "var(--ink)" }}
                >
                  {t.location.openMaps}{" "}
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA BAND ================= */}
        <section
          ref={ctaBandRef}
          style={{
            background: "var(--wood-light)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 sm:px-6 py-12 text-center">
            <UtensilsCrossed size={22} style={{ color: "var(--wood-deep)" }} />
            <h2 className="font-display uppercase text-[clamp(1.6rem,4vw,2.5rem)] leading-tight max-w-xl">
              {t.cta.heading}{" "}
              <span className="sign-glow">{t.cta.headingAccent}</span>{" "}
              {t.cta.headingSuffix}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <PrimaryLink href={WOLT_URL}>{t.cta.orderWolt}</PrimaryLink>
              <SecondaryLink href={EFOOD_URL}>{t.cta.orderEfood}</SecondaryLink>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <LogoBadge size={40} alt={t.logoAlt} />
              <div className="leading-tight text-center sm:text-left">
                <span className="font-display tracking-[0.18em] block">IGANO</span>
                <span className="block text-[11px] uppercase tracking-[0.2em] opacity-60 mt-0.5">
                  {t.footer.tagline}
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/igano_streetfood?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-[#f2efe9] hover:text-[#181816]"
                style={{ borderColor: "rgba(242,239,233,0.25)" }}
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href="https://www.facebook.com/IGANO.TASTE/"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-[#f2efe9] hover:text-[#181816]"
                style={{ borderColor: "rgba(242,239,233,0.25)" }}
              >
                <FacebookIcon size={17} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="mt-8 flex flex-col items-center text-center gap-2 border-t pt-6 text-xs sm:flex-row sm:justify-between sm:text-left"
            style={{
              borderColor: "rgba(242,239,233,0.15)",
              color: "rgba(242,239,233,0.6)",
            }}
          >
            <p>
              © {new Date().getFullYear()} IGANO — Noodles and Buns.{" "}
              {t.footer.rightsReserved}
            </p>
            <p>{t.footer.address}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
