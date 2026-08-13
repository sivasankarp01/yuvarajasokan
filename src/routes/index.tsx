import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import portrait from "@/assets/yuvaraj-asokan.jpg.asset.json";
import nawayef from "@/assets/nawayef-souq.jpg.asset.json";
import seaHaven from "@/assets/sea-haven.jpg.asset.json";
import aldar from "@/assets/aldar-manarat.jpg.asset.json";
import cba from "@/assets/cba.jpg.asset.json";
import redSea from "@/assets/red-sea-global.jpg.asset.json";
import qatar from "@/assets/qatar-media.jpg.asset.json";
import cvPdf from "@/assets/Yuvaraj-Asokan-BIM-Modeller-CV.pdf.asset.json";
import portfolioPdf from "@/assets/Yuvaraj-Asokan-BIM-Portfolio.pdf.asset.json";

const TITLE = "Yuvaraj Asokan | BIM Modeller Portfolio";
const DESCRIPTION =
  "Portfolio of Yuvaraj Asokan, a Dubai-based BIM Modeller specialising in Architecture, Interior Design, Revit, Navisworks and multidisciplinary BIM coordination.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "BIM Modeller Dubai, BIM Modeller UAE, Revit Modeller UAE, Architectural BIM Modeller, Interior BIM Modeller, BIM Coordinator, Navisworks, Autodesk Revit",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Yuvaraj Asokan",
          jobTitle: "BIM Modeller – Architecture / Interior Design",
          email: "mailto:yuvarajasokan9@gmail.com",
          telephone: "+971565507380",
          url: "https://www.linkedin.com/in/yuvarajasokan",
          address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
          knowsAbout: ["Autodesk Revit", "Navisworks", "BIM Coordination", "COBie", "Clash Detection"],
        }),
      },
    ],
  }),
});

const projects = [
  {
    no: "01",
    name: "Nawayef Souq",
    location: "Hudayriyat Island, Abu Dhabi",
    type: "Townhouse Cluster",
    lod: "LOD 200",
    image: nawayef.url,
    alt: "Aerial view of the Nawayef Souq townhouse cluster development on Hudayriyat Island, Abu Dhabi",
    description:
      "Architectural and interior modelling from CAD updates across basement, ground and first floors.",
    tags: ["Architecture", "Interior", "CAD to BIM"],
  },
  {
    no: "02",
    name: "Sea Haven",
    location: "Dubai Harbour, Dubai",
    type: "Three-Tower Residential Complex",
    lod: "LOD 400",
    image: seaHaven.url,
    alt: "Colour-coded elevation diagram of the three Sea Haven residential towers at Dubai Harbour",
    description:
      "Coordinated amenities BIM for three towers, including lobby, pool, gym, clubhouse and lounge areas.",
    tags: ["RCP", "Wall Coordination", "Amenities"],
  },
  {
    no: "03",
    name: "Aldar Manarat – Phase 2",
    location: "Abu Dhabi, UAE",
    type: "G+12 Residential Building",
    lod: "LOD 400",
    image: aldar.url,
    alt: "Isometric Revit model of the Aldar Manarat Phase 2 G+12 residential building in Abu Dhabi",
    description:
      "Architectural and facade BIM, coordinated plans, call-outs, schedules and IFC-driven model verification.",
    tags: ["Facade", "Schedules", "QA/QC"],
  },
  {
    no: "04",
    name: "Commonwealth Bank of Australia",
    location: "Commercial Interiors",
    type: "Interior Fit-out",
    lod: "LOD 400",
    image: cba.url,
    alt: "Revit detail model of blind assemblies and headrail millwork for the Commonwealth Bank of Australia fit-out",
    description:
      "Client-template sheet production covering millwork, blinds, finishes, furniture alignment and COBie data.",
    tags: ["COBie", "Revit Families", "Sheet Work"],
  },
  {
    no: "05",
    name: "Red Sea Global",
    location: "Bahrain",
    type: "Hospitality Development",
    lod: "LOD 400",
    image: redSea.url,
    alt: "Three-dimensional model of a Red Sea Global hospitality pavilion with curved roof structure",
    description:
      "Modelled skirting, coping and steel framing across four zones and maintained coordinated asset data.",
    tags: ["Clash Detection", "COBie", "BIM 360"],
  },
  {
    no: "06",
    name: "Qatar Media Project",
    location: "Qatar",
    type: "AM, FM and QTV Buildings",
    lod: "LOD 100–200",
    image: qatar.url,
    alt: "Massing model of the Qatar Media Project AM, FM and QTV buildings",
    description:
      "CAD-to-BIM reconstruction of floors, walls, ceilings and interior elements across three media buildings.",
    tags: ["CAD to BIM", "Architecture", "MEP Coordination"],
  },
];

const experience = [
  {
    dates: "December 2025 – Present",
    role: "BIM Modeller – Architecture / ID",
    company: "PNC Architects, United Arab Emirates",
    description:
      "Multidisciplinary coordination, model federation, clash detection, GA and RCP packages, schedules, shop drawings, model audits and as-built BIM across major GCC developments.",
  },
  {
    dates: "February 2022 – December 2025",
    role: "BIM Modeller – Architecture / ID",
    company: "Infinevod Delivering BIM Excellence, India",
    description:
      "Developed and maintained coordinated BIM models, Revit documentation, families, worksets, BIM 360 workflows, RFIs and COBie deliverables.",
  },
  {
    dates: "2017 – 2021",
    role: "B.E. Civil Engineering",
    company: "Anna University, India",
    description: "",
  },
];

const skills: { label: string; highlight?: boolean }[] = [
  { label: "Autodesk Revit", highlight: true },
  { label: "Navisworks Manage" },
  { label: "AutoCAD" },
  { label: "Autodesk Construction Cloud" },
  { label: "BIM 360" },
  { label: "Bluebeam" },
  { label: "Clash Detection" },
  { label: "BIM Coordination", highlight: true },
  { label: "RFI Management" },
  { label: "COBie Data", highlight: true },
  { label: "Revit Families" },
  { label: "Model QA/QC", highlight: true },
];

const tickerItems = [
  "REVIT",
  "NAVISWORKS",
  "BIM 360",
  "ARCHITECTURE",
  "INTERIOR DESIGN",
  "COBie",
  "CLASH DETECTION",
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink font-mono text-xs tracking-widest text-lime">
            YA
          </span>
          <span className="truncate text-sm font-semibold tracking-tight text-ink sm:text-base">
            Yuvaraj Asokan
          </span>
        </a>
        <nav className="flex items-center gap-1 sm:gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={cvPdf.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center rounded-full bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
          >
            View CV
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink md:hidden"
          >
            <span aria-hidden className="text-lg leading-none">
              {open ? "×" : "≡"}
            </span>
          </button>
        </nav>
      </div>
      {open && (
        <ul className="border-t border-line bg-cream px-4 py-2 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-mono text-xs uppercase tracking-[0.18em] text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-subtle">{children}</p>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-cream text-ink">
      <Nav />

      {/* HERO */}
      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-8 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="fade-up min-w-0">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#3FA45B]" aria-hidden />
              Dubai, UAE · Available for BIM opportunities
            </p>
            <h1 className="mt-6 text-[clamp(2.4rem,7vw,4.6rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
              Building clarity into
              <br />
              <span className="font-serif text-subtle italic font-normal">
                complex BIM projects.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-subtle sm:text-lg">
              BIM Modeller specialising in Architecture and Interior Design, with 4.5+ years of
              experience delivering coordinated models and construction documentation across the
              GCC.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Explore Projects
              </a>
              <a
                href={cvPdf.url}
                download="Yuvaraj-Asokan-BIM-Modeller-CV.pdf"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Download CV
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
              {[
                ["4.5+", "Years of Experience"],
                ["7+", "GCC Projects"],
                ["LOD 100–500", "Model Delivery"],
              ].map(([v, k]) => (
                <div key={k}>
                  <dt className="text-2xl font-bold tracking-tight sm:text-3xl">{v}</dt>
                  <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                    {k}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-w-0">
            <div className="relative overflow-hidden border border-line bg-stone">
              <img
                src={portrait.url}
                alt="Portrait of Yuvaraj Asokan, BIM Modeller based in Dubai"
                className="aspect-[3/4] w-full object-cover object-top"
                loading="eager"
              />
              <div className="bim-grid pointer-events-none absolute inset-0" aria-hidden />
            </div>
            <div className="absolute -bottom-6 left-0 max-w-[80%] bg-lime px-5 py-4 sm:-left-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70">
                Current role
              </p>
              <p className="mt-1 text-sm font-bold tracking-tight text-ink">
                BIM Modeller · ARCH / ID
              </p>
            </div>
            <span
              className="absolute -right-14 top-1/2 hidden -translate-y-1/2 rotate-90 font-mono text-[10px] uppercase tracking-[0.3em] text-subtle xl:block"
              aria-hidden
            >
              25.2048° N · 55.2708° E
            </span>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-ink/20 bg-deep py-4">
        <div className="ticker-track flex w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
              {tickerItems.map((t) => (
                <span
                  key={t}
                  className="flex items-center whitespace-nowrap px-6 font-mono text-[11px] uppercase tracking-[0.28em] text-white sm:text-xs"
                >
                  {t}
                  <span className="pl-6 text-lime">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PROFILE */}
      <section id="about" className="mx-auto max-w-[1280px] scroll-mt-20 px-4 py-20 sm:px-8 sm:py-28">
        <SectionLabel>01 / PROFILE</SectionLabel>
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-[clamp(1.9rem,4.4vw,3.1rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">
            Coordination-minded.
            <br />
            Detail-driven.
            <br />
            <span className="font-serif italic font-normal text-subtle">Delivery focused.</span>
          </h2>
          <div className="min-w-0">
            <p className="text-xl font-medium leading-snug tracking-tight sm:text-2xl">
              I translate design intent into accurate, constructible BIM information that teams can
              confidently build from.
            </p>
            <p className="mt-6 leading-relaxed text-subtle">
              My experience covers residential, commercial, mixed-use and interior projects across
              the UAE, Saudi Arabia, Qatar and Bahrain. I work across architectural, structural, MEP
              and facade coordination, from early modelling through shop drawings, as-builts and
              handover data.
            </p>
            <div className="mt-10 border-l-2 border-lime pl-6">
              <p className="text-3xl font-extrabold tracking-tight">150+</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-subtle">
                Coordination clashes identified and supported toward resolution per project cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-20 bg-stone py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
          <SectionLabel>02 / SELECTED WORK</SectionLabel>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h2 className="text-[clamp(1.9rem,4.4vw,3.1rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">
              Projects that moved
              <br />
              from model to reality.
            </h2>
            <p className="leading-relaxed text-subtle">
              Selected BIM contributions spanning high-rise residential, commercial interiors,
              hospitality and media developments.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.no} className="group border-t-2 border-ink pt-5">
                <div className="relative overflow-hidden bg-white">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="h-[260px] w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04] sm:h-[320px]"
                  />
                  <span className="absolute left-0 top-0 bg-ink px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-lime">
                    {p.no}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight sm:text-2xl">{p.name}</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                  {p.location} · {p.type} · {p.lod}
                </p>
                <p className="mt-3 leading-relaxed text-subtle">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line bg-cream px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <a
            href={portfolioPdf.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-16 flex min-h-[44px] items-center justify-between border-y border-ink py-6 text-lg font-semibold tracking-tight transition-colors hover:text-subtle sm:text-2xl"
          >
            View the complete 41-page project portfolio
            <span aria-hidden>↗</span>
          </a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="mx-auto max-w-[1280px] scroll-mt-20 px-4 py-20 sm:px-8 sm:py-28"
      >
        <SectionLabel>03 / EXPERIENCE</SectionLabel>
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-[clamp(1.9rem,4.4vw,3.1rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">
            Experience across
            <br />
            <span className="font-serif italic font-normal text-subtle">design and delivery.</span>
          </h2>
          <ol className="min-w-0 border-l border-line">
            {experience.map((e) => (
              <li key={e.role + e.dates} className="relative pb-12 pl-6 last:pb-0">
                <span
                  className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-lime ring-2 ring-ink"
                  aria-hidden
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                  {e.dates}
                </p>
                <h3 className="mt-2 text-lg font-bold tracking-tight sm:text-xl">{e.role}</h3>
                <p className="mt-1 text-sm text-subtle">{e.company}</p>
                {e.description && (
                  <p className="mt-3 leading-relaxed text-subtle">{e.description}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TOOLKIT */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/60">
            04 / TOOLKIT
          </p>
          <h2 className="mt-8 text-[clamp(1.9rem,4.4vw,3.1rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">
            Technical capability,
            <br />
            <span className="font-serif italic font-normal text-white/55">
              practical application.
            </span>
          </h2>
          <ul className="mt-12 flex flex-wrap gap-3">
            {skills.map((s) => (
              <li
                key={s.label}
                className={
                  s.highlight
                    ? "rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink"
                    : "rounded-full border border-white/25 px-5 py-2.5 text-sm text-white/90"
                }
              >
                {s.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
          <SectionLabel>LET’S COORDINATE</SectionLabel>
          <h2 className="mt-6 text-[clamp(2rem,5.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            Ready to contribute
            <br />
            to your next{" "}
            <span className="font-serif italic font-normal text-subtle">BIM project.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-subtle">
            Open to BIM Modeller and BIM Coordinator opportunities across the UAE.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="mailto:yuvarajasokan9@gmail.com"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              yuvarajasokan9@gmail.com
            </a>
            <a
              href="tel:+971565507380"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              +971 56 550 7380
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/yuvarajasokan" },
              { label: "Curriculum Vitae", href: cvPdf.url },
              { label: "Project Portfolio", href: portfolioPdf.url },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.18em] text-subtle transition-colors hover:text-ink"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-cream">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-4 py-8 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Yuvaraj Asokan</p>
          <p>BIM Modeller · Dubai, UAE</p>
        </div>
      </footer>
    </div>
  );
}
