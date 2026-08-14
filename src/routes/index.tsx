import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Boxes,
  Building2,
  ClipboardCheck,
  Download,
  FileStack,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ScanSearch,
  Sofa,
  X,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { Typewriter } from "@/components/site/Typewriter";


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
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:locale", content: "en_AE" },
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
    image: "/images/nawayef-souq.jpg",
    width: 442,
    height: 439,
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
    image: "/images/sea-haven.jpg",
    width: 729,
    height: 838,
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
    image: "/images/aldar-manarat.jpg",
    width: 1059,
    height: 1015,
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
    image: "/images/cba.jpg",
    width: 858,
    height: 549,
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
    image: "/images/red-sea-global.jpg",
    width: 562,
    height: 455,
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
    image: "/images/qatar-media.jpg",
    width: 534,
    height: 265,
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

const capabilities = [
  {
    icon: Building2,
    title: "Architectural BIM",
    front: "Design intent to model",
    back: "Full architectural modelling from CAD and design packages — plans, sections, elevations, call-outs and coordinated GA sheets.",
  },
  {
    icon: Sofa,
    title: "Interior Design BIM",
    front: "Fit-out precision",
    back: "Millwork, finishes, furniture, blinds and RCP modelling with client Revit templates and family creation.",
  },
  {
    icon: ScanSearch,
    title: "Clash Detection",
    front: "Navisworks federation",
    back: "Model federation, clash matrices, issue tracking and resolution support across architecture, structure and MEP.",
  },
  {
    icon: Layers,
    title: "LOD 100 – 500",
    front: "Right detail, right stage",
    back: "Staged model development from concept massing through construction-ready and as-built information.",
  },
  {
    icon: ClipboardCheck,
    title: "Model QA / QC",
    front: "Audited deliverables",
    back: "Model audits, naming and workset standards, IFC verification and BEP-compliant deliverable checks.",
  },
  {
    icon: Boxes,
    title: "COBie & Asset Data",
    front: "Structured handover",
    back: "Parameter mapping, asset tagging and COBie data population for smooth facility handover.",
  },
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
  { label: "Capabilities", href: "#capabilities" },
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
            href="/files/Yuvaraj-Asokan-BIM-Modeller-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center rounded-full bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-cream transition-transform hover:-translate-y-0.5"
          >
            <FileStack className="mr-2 h-3.5 w-3.5" aria-hidden />
            View CV
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
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

function FlipCard({ children }: { children: ReactNode }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="flip-scene h-[230px] w-full"
      data-flipped={flipped}
      onClick={() => setFlipped((v) => !v)}
    >
      <div className="flip-inner relative h-full w-full">{children}</div>
    </div>
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
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="fade-up order-2 min-w-0 lg:order-1">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-lime" aria-hidden />
              Dubai, UAE · Available for BIM opportunities
            </p>
            <h1 className="mt-6 text-[clamp(2.4rem,7vw,4.6rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
              Building clarity into
              <br />
              <Typewriter
                className="font-serif text-subtle italic font-normal"
                words={["complex BIM projects.", "Revit coordination.", "interior fit-outs.", "as-built delivery."]}
              />
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-subtle sm:text-lg">
              BIM Modeller specialising in Architecture and Interior Design, with 4.5+ years of
              experience delivering coordinated models and construction documentation across the
              GCC.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </a>
              <a
                href="/files/Yuvaraj-Asokan-BIM-Modeller-CV.pdf"
                download="Yuvaraj-Asokan-BIM-Modeller-CV.pdf"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                <Download className="mr-2 h-4 w-4" aria-hidden />
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

          <div className="relative order-1 min-w-0 lg:order-2">
            <div className="relative overflow-hidden border border-line bg-stone">
              <img
                src="/images/yuvaraj-asokan.jpg"
                alt="Portrait of Yuvaraj Asokan, BIM Modeller based in Dubai"
                className="aspect-[3/4] w-full object-cover object-top"
                width={692}
                height={1009}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                sizes="(max-width: 1024px) 92vw, 42vw"
              />
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
      <div className="overflow-hidden border-y border-ink/20 bg-ink py-4">
        <div className="ticker-track flex w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
              {tickerItems.map((t) => (
                <span
                  key={t}
                  className="flex items-center whitespace-nowrap px-6 font-mono text-[11px] uppercase tracking-[0.28em] text-cream sm:text-xs"
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

      {/* CAPABILITIES */}
      <section id="capabilities" className="scroll-mt-20 border-y border-line bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
          <Reveal>
            <SectionLabel>02 / CAPABILITIES</SectionLabel>
            <h2 className="mt-8 max-w-2xl text-[clamp(1.9rem,4.4vw,3.1rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">
              What I bring to a{" "}
              <span className="font-serif italic font-normal text-subtle">BIM team.</span>
            </h2>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
              Hover or tap a card to flip
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 70}>
                  <FlipCard>
                    <div className="flip-face flex h-full flex-col justify-between border border-line bg-stone p-6">
                      <Icon className="h-8 w-8 text-ink" aria-hidden />
                      <div className="mt-10">
                        <h3 className="text-xl font-bold tracking-tight">{c.title}</h3>
                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                          {c.front}
                        </p>
                      </div>
                    </div>
                    <div className="flip-face flip-back absolute inset-0 flex h-full flex-col justify-between border border-ink bg-ink p-6 text-cream">
                      <Icon className="h-8 w-8 text-lime" aria-hidden />
                      <p className="mt-6 text-sm leading-relaxed text-cream/85">{c.back}</p>
                    </div>
                  </FlipCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-20 bg-stone py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
          <Reveal><SectionLabel>03 / SELECTED WORK</SectionLabel></Reveal>
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
            {projects.map((p, i) => (
              <Reveal key={p.no} delay={(i % 2) * 90} className="group block border-t-2 border-ink pt-5" as="article">
                <div className="relative overflow-hidden bg-white">
                  <img
                    src={p.image}
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 92vw, 46vw"
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
              </Reveal>
            ))}
          </div>

          <a
            href="/files/Yuvaraj-Asokan-BIM-Portfolio.pdf"
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
        <Reveal><SectionLabel>04 / EXPERIENCE</SectionLabel></Reveal>
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-[clamp(1.9rem,4.4vw,3.1rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">
            Experience across
            <br />
            <span className="font-serif italic font-normal text-subtle">design and delivery.</span>
          </h2>
          <ol className="min-w-0 border-l border-line">
            {experience.map((e, i) => (
              <Reveal key={e.role + e.dates} as="li" delay={i * 90} className="relative block pb-12 pl-6 last:pb-0">
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
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* TOOLKIT */}
      <section className="bg-ink py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cream/60">
            05 / TOOLKIT
          </p>
          <h2 className="mt-8 text-[clamp(1.9rem,4.4vw,3.1rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">
            Technical capability,
            <br />
            <span className="font-serif italic font-normal text-cream/55">
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
                    : "rounded-full border border-cream/25 px-5 py-2.5 text-sm text-cream/90"
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
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <Mail className="mr-2 h-4 w-4" aria-hidden />
              yuvarajasokan9@gmail.com
            </a>
            <a
              href="tel:+971565507380"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              +971 56 550 7380
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/yuvarajasokan", icon: Linkedin },
              { label: "Curriculum Vitae", href: "/files/Yuvaraj-Asokan-BIM-Modeller-CV.pdf", icon: FileStack },
              { label: "Project Portfolio", href: "/files/Yuvaraj-Asokan-BIM-Portfolio.pdf", icon: Ruler },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.18em] text-subtle transition-colors hover:text-ink"
              >
                <l.icon className="mr-2 h-3.5 w-3.5" aria-hidden />
                {l.label}
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" aria-hidden />
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
