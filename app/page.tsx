import type { ReactNode } from "react";
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

/* Brand icons — αφαιρέθηκαν από το lucide-react, οπότε inline SVG */
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

const WOLT_URL = "https://wolt.com/el/grc/kavala/restaurant/igano";
const EFOOD_URL = "https://www.e-food.gr/delivery/kavala/igano-7428989";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=IGANO+Noodles+and+Buns+Dagkli+4+Kavala";

/* ---------- Brand logo: circular badge with stacked letters ---------- */
function LogoBadge({ size = 44 }: { size?: number }) {
  return (
    <div
      aria-hidden
      className="flex flex-col items-center justify-center rounded-full select-none shrink-0"
      style={{
        width: size,
        height: size,
        background: "var(--ink)",
        color: "var(--paper)",
      }}
    >
      <div
        className="font-display leading-none text-center"
        style={{ fontSize: size * 0.26, letterSpacing: "0.08em" }}
      >
        <div style={{ transform: "translateX(0.04em)" }}>IGA</div>
        <div>NO</div>
      </div>
    </div>
  );
}

/* ---------- Minimal line-art food illustrations ---------- */
function NoodleBowlArt() {
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full" aria-hidden>
      <g stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" fill="none">
        <path className="steam" d="M95 58 q-6 -12 0 -22 q6 -10 0 -20" />
        <path className="steam s2" d="M120 54 q-6 -12 0 -22 q6 -10 0 -20" />
        <path className="steam s3" d="M145 58 q-6 -12 0 -22 q6 -10 0 -20" />
      </g>
      <g stroke="var(--ink)" strokeWidth="5" strokeLinecap="round">
        <line x1="150" y1="20" x2="98" y2="96" />
        <line x1="170" y1="30" x2="112" y2="98" />
      </g>
      <g
        stroke="var(--wood-deep)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M100 96 q-4 14 2 26" />
        <path d="M108 98 q-2 14 4 24" />
        <path d="M116 98 q0 12 6 22" />
      </g>
      <path d="M48 110 h144 a72 62 0 0 1 -144 0 z" fill="var(--ink)" />
      <path
        d="M58 122 h124"
        stroke="var(--paper)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
      />
      <rect x="98" y="176" width="44" height="10" rx="5" fill="var(--ink)" />
    </svg>
  );
}

function BaoBunArt() {
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full" aria-hidden>
      <g stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" fill="none">
        <path className="steam" d="M100 52 q-6 -10 0 -18 q6 -8 0 -16" />
        <path className="steam s2" d="M140 52 q-6 -10 0 -18 q6 -8 0 -16" />
      </g>
      <path
        d="M52 130 q0 -64 68 -64 q68 0 68 64 z"
        fill="var(--paper)"
        stroke="var(--ink)"
        strokeWidth="6"
      />
      <g stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M120 66 v18" />
        <path d="M98 70 q4 10 8 16" />
        <path d="M142 70 q-4 10 -8 16" />
      </g>
      <path
        d="M58 130 h124 q-6 16 -18 16 h-88 q-12 0 -18 -16 z"
        fill="var(--wood)"
      />
      <path
        d="M62 146 h116 q-8 24 -58 24 q-50 0 -58 -24 z"
        fill="var(--paper)"
        stroke="var(--ink)"
        strokeWidth="6"
      />
      <rect x="40" y="176" width="160" height="10" rx="5" fill="var(--ink)" />
    </svg>
  );
}

/* ---------- Buttons ---------- */
function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
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

function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
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

/* ---------- Page ---------- */
export default function Home() {
  const menuItems = [
    {
      title: "Noodles",
      desc: "Wok-fried to order over high flame — pick your noodle, sauce and topping.",
      art: <NoodleBowlArt />,
      tags: ["Chicken teriyaki", "Beef hoisin", "Veggie sweet & sour"],
      icon: <Flame size={16} />,
      iconLabel: "Wok-fired",
    },
    {
      title: "Bao Buns",
      desc: "Pillow-soft steamed buns with slow-cooked fillings and crunchy slaw.",
      art: <BaoBunArt />,
      tags: ["Crispy chicken bao", "Pulled pork bao", "Tofu bao"],
      icon: <Leaf size={16} />,
      iconLabel: "Veggie options",
    },
  ];

  const hours = [
    { days: "Monday – Friday", time: "12:00 – 01:00" },
    { days: "Saturday", time: "12:00 – 24:00" },
    { days: "Sunday", time: "12:00 – 01:00" },
  ];

  return (
    <div style={{ background: "var(--paper)", color: "var(--ink)" }}>
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
            <LogoBadge size={42} />
            <div className="leading-tight">
              <span className="font-display text-xl tracking-[0.18em]">
                IGANO
              </span>
              <span
                className="hidden sm:block text-[11px] uppercase tracking-[0.22em]"
                style={{ color: "var(--ink-soft)" }}
              >
                Noodles &amp; Buns
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:opacity-70 transition-opacity">
              Menu
            </a>
            <a href="#location" className="hover:opacity-70 transition-opacity">
              Location
            </a>
          </div>

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
            Order Online
          </a>
        </nav>
      </header>

      <main id="top">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 pt-14 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-20 lg:pb-24">
            <div>
              <p
                className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{
                  borderColor: "var(--wood)",
                  color: "var(--ink-soft)",
                  background: "var(--wood-light)",
                }}
              >
                Asian street food · Kavala
              </p>

              <h1 className="font-display uppercase leading-[0.95] text-[clamp(3rem,9vw,5.5rem)]">
                Noodles
                <br />
                <span className="sign-glow">&amp;</span> Buns
                <br />
                in Kavala
              </h1>

              <p
                className="mt-6 max-w-md text-base sm:text-lg leading-relaxed"
                style={{ color: "var(--ink-soft)" }}
              >
                Authentic street food, made fresh in front of you. Build your
                wok noodles, grab a steamed bao, and go — or let us bring it to
                your door.
              </p>

              <div
                id="order"
                className="mt-8 flex flex-col sm:flex-row gap-3 scroll-mt-28"
              >
                <PrimaryLink href={WOLT_URL}>
                  <Bike size={18} />
                  Order on Wolt
                </PrimaryLink>
                <SecondaryLink href={EFOOD_URL}>
                  <Bike size={18} />
                  Order on E-food
                </SecondaryLink>
              </div>

              <div
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium"
                style={{ color: "var(--ink-soft)" }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <Star size={16} fill="var(--amber)" stroke="var(--amber)" />
                  4.7 · 7,178 reviews
                </span>
                <span>€ 5–10 per person</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={16} />
                  Open daily until late
                </span>
              </div>
            </div>

            {/* Hero visual — replace with a real food photo (next/image) */}
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
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <NoodleBowlArt />
                </div>
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{
                    background: "rgba(24,24,22,0.85)",
                    color: "var(--paper)",
                  }}
                >
                  Your food photo here
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
                <div className="font-display text-lg leading-none">FRESH</div>
                <div
                  className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--paper)" }}
                >
                  wok daily
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MENU SNEAK PEEK ================= */}
        <section
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
                  Bestsellers
                </p>
                <h2
                  className="font-display uppercase text-[clamp(2rem,5vw,3.25rem)] leading-none"
                  style={{ color: "var(--paper)" }}
                >
                  Pick your <span className="sign-glow">craving</span>
                </h2>
              </div>
              <a
                href={WOLT_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ color: "var(--amber)" }}
              >
                Full menu on Wolt <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {menuItems.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-[1.75rem] p-6 sm:p-8 transition-transform duration-200 hover:-translate-y-1"
                  style={{ background: "var(--paper)" }}
                >
                  <div
                    className="mb-6 flex aspect-[16/10] items-center justify-center rounded-2xl p-6"
                    style={{
                      background:
                        "linear-gradient(150deg, var(--wood-light), var(--paper-soft))",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <div className="h-full w-auto max-w-[220px]">{item.art}</div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display uppercase text-2xl tracking-wide">
                      {item.title}
                    </h3>
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
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
              Find us
            </p>
            <h2 className="font-display uppercase text-[clamp(2rem,5vw,3.25rem)] leading-none mb-10">
              In the heart of Kavala
            </h2>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Info cards */}
              <div className="grid gap-4 content-start">
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
                      Address
                    </span>
                    <span className="mt-1 block font-semibold">
                      Dagkli 4, Kavala 654 03
                    </span>
                    <span
                      className="block text-sm"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      Outdoor seating available
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
                      Phone
                    </span>
                    <span className="mt-1 block font-semibold">
                      251 062 1809
                    </span>
                    <span
                      className="block text-sm"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      Call for takeaway orders
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
                      Opening hours
                    </span>
                  </div>
                  <dl className="mt-4 space-y-2 text-sm">
                    {hours.map((h) => (
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
                  Delivery &amp; takeaway via Wolt and E-food
                </div>
              </div>

              {/* Map — replace the inner block with your Google Maps iframe embed */}
              <div
                className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] border"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--paper-soft)",
                }}
              >
                <svg
                  className="absolute inset-0 h-full w-full opacity-40"
                  aria-hidden
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="36"
                      height="36"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 36 0 L 0 0 0 36"
                        fill="none"
                        stroke="var(--line)"
                        strokeWidth="1.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: "var(--ink)" }}
                  >
                    <MapPin size={24} style={{ color: "var(--amber)" }} />
                  </span>
                  <p className="font-display text-xl uppercase tracking-wide">
                    Dagkli 4, Kavala
                  </p>
                  <p
                    className="max-w-xs text-sm"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    Replace this block with your Google Maps embed iframe.
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold"
                    style={{ background: "var(--ink)", color: "var(--paper)" }}
                  >
                    Open in Google Maps{" "}
                    <ArrowUpRight size={15} style={{ color: "var(--amber)" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA BAND ================= */}
        <section
          style={{
            background: "var(--wood-light)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 sm:px-6 py-12 text-center">
            <UtensilsCrossed size={22} style={{ color: "var(--wood-deep)" }} />
            <h2 className="font-display uppercase text-[clamp(1.6rem,4vw,2.5rem)] leading-tight max-w-xl">
              Hungry? Your order is{" "}
              <span className="sign-glow">20 minutes</span> away
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <PrimaryLink href={WOLT_URL}>Order on Wolt</PrimaryLink>
              <SecondaryLink href={EFOOD_URL}>Order on E-food</SecondaryLink>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3">
              <LogoBadge size={40} />
              <div className="leading-tight">
                <span className="font-display tracking-[0.18em]">IGANO</span>
                <span className="block text-[11px] uppercase tracking-[0.2em] opacity-60">
                  Noodles &amp; Buns · Kavala
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-[#f2efe9] hover:text-[#181816]"
                style={{ borderColor: "rgba(242,239,233,0.25)" }}
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-[#f2efe9] hover:text-[#181816]"
                style={{ borderColor: "rgba(242,239,233,0.25)" }}
              >
                <FacebookIcon size={17} />
              </a>
            </div>
          </div>

          <div
            className="mt-8 flex flex-col items-center gap-2 border-t pt-6 text-xs sm:flex-row sm:justify-between"
            style={{
              borderColor: "rgba(242,239,233,0.15)",
              color: "rgba(242,239,233,0.6)",
            }}
          >
            <p>
              © {new Date().getFullYear()} IGANO — Noodles and Buns. All rights
              reserved.
            </p>
            <p>Dagkli 4, Kavala 654 03 · 251 062 1809</p>
          </div>
        </div>
      </footer>
    </div>
  );
}