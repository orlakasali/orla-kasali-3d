"use client";

import { ArrowDown, ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import PortfolioScene from "@/components/PortfolioScene";

const projects = [
  {
    number: "01",
    category: "E-COMMERCE / WEB DESIGN",
    title: "Dressmaker by Olivia",
    description:
      "A fashion e-commerce experience designed for a Chicago-based fashion studio, combining editorial presentation with a complete shopping journey.",
    href: "https://www.dressmakerbyolivia.com/",
  },
  {
    number: "02",
    category: "E-COMMERCE / DIGITAL PRODUCT",
    title: "Green and Healthy",
    description:
      "A complete digital commerce ecosystem for a healthy food brand, including customer shopping, orders, products, marketing and business management.",
    href: "https://green-and-healthy-pearl.vercel.app/",
  },
  {
    number: "03",
    category: "MOBILE APP / PRODUCT DESIGN",
    title: "ShopPilot",
    description:
      "A business management application built for fashion designers and tailors to manage customers, measurements, orders, payments, deliveries and revenue.",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070707] text-white">
      {/* Navigation */}
      <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-10">
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-white/15 bg-black/25 px-5 py-3 shadow-[0_10px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:px-7">
          <a
            href="#top"
            className="font-[family-name:var(--font-bricolage)] text-sm font-bold tracking-[-0.04em] sm:text-base"
          >
            ORLA KASALI<span className="text-red-500">.</span>
          </a>

          <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.16em] text-white/65 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-red-500/40 bg-red-500/[0.08] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-red-300 backdrop-blur-xl transition hover:bg-red-500 hover:text-white"
          >
            Let&apos;s talk
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        {/* Full-page 3D glass atmosphere */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <PortfolioScene />
        </div>

        {/* Glass / light atmosphere */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_68%_42%,rgba(255,30,30,0.13),transparent_28%),radial-gradient(circle_at_22%_65%,rgba(255,0,0,0.06),transparent_30%)]" />

        <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(7,7,7,0.88)_0%,rgba(7,7,7,0.58)_38%,rgba(7,7,7,0.12)_75%,rgba(7,7,7,0.28)_100%)]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1500px] items-center px-5 pb-20 pt-32 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.045] px-4 py-2 shadow-[0_10px_50px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
              <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.9)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                Digital Product Designer & Developer
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-bricolage)] text-[clamp(4rem,10vw,9rem)] font-extrabold leading-[0.82] tracking-[-0.075em]">
              ORLA
              <br />
              <span className="text-red-500">KASALI</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              I design and build digital experiences where strategy, product
              thinking, technology and visual direction come together.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-red-500 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_12px_50px_rgba(239,68,68,0.18)] transition hover:bg-red-400"
              >
                Explore my work

                <ArrowDown
                  size={15}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.045] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_50px_rgba(0,0,0,0.2)] backdrop-blur-2xl transition hover:bg-white/10"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/35 sm:flex">
          <ArrowDown size={12} />
          Scroll to explore
        </div>
      </section>

      {/* Intro */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#090909] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,0,0,0.06),transparent_25%)]" />

        <div className="relative mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-400">
                01 / What I do
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl font-[family-name:var(--font-bricolage)] text-4xl font-bold leading-[1] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                I turn ideas into{" "}
                <span className="text-red-500">digital products</span> people
                can actually use.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
                From websites and e-commerce platforms to mobile products and
                business tools, I work across design and development to take
                products from concept to reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="relative border-t border-white/10 bg-black px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 flex items-end justify-between gap-8">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-red-400">
                02 / Selected work
              </p>

              <h2 className="font-[family-name:var(--font-bricolage)] text-5xl font-bold tracking-[-0.06em] sm:text-7xl">
                Things I&apos;ve built<span className="text-red-500">.</span>
              </h2>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.18em] text-white/30 sm:block">
              2024 — 2026
            </span>
          </div>

          <div className="space-y-5">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_100px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition duration-500 hover:border-red-500/30 hover:bg-white/[0.055] sm:p-8 lg:p-10"
              >
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl transition duration-700 group-hover:bg-red-500/20" />

                <div className="relative grid gap-8 lg:grid-cols-[90px_1fr_auto] lg:items-center">
                  <div className="font-[family-name:var(--font-bricolage)] text-sm font-bold text-red-500">
                    {project.number}
                  </div>

                  <div>
                    <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                      {project.category}
                    </p>

                    <h3 className="font-[family-name:var(--font-bricolage)] text-3xl font-bold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45 sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <a
                    href={project.href}
                    target={project.href !== "#" ? "_blank" : undefined}
                    rel={
                      project.href !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group/link flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl transition hover:border-red-500 hover:bg-red-500"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight
                      size={20}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative overflow-hidden border-t border-white/10 bg-[#090909] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
      >
        <div className="absolute left-[-10%] top-[20%] h-80 w-80 rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-400">
                03 / About
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl font-[family-name:var(--font-bricolage)] text-4xl font-bold leading-[1] tracking-[-0.055em] sm:text-6xl">
                Design is only half the story.
                <span className="text-red-500"> Building is the other.</span>
              </h2>

              <div className="mt-10 grid gap-8 text-sm leading-7 text-white/50 sm:grid-cols-2 sm:text-base">
                <p>
                  I work at the intersection of product design, technology,
                  branding and digital experiences. My approach is visual,
                  strategic and hands-on.
                </p>

                <p>
                  Through Black Switch Technologies, I also work on digital
                  products and experiences for businesses that want to move
                  from an idea to something real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden bg-red-600 px-5 py-24 sm:px-8 lg:px-12 lg:py-40"
      >
        <div className="absolute right-[-10%] top-[-30%] h-[500px] w-[500px] rounded-full bg-black/20 blur-[100px]" />

        <div className="relative mx-auto max-w-[1500px]">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
            04 / Contact
          </p>

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-5xl font-[family-name:var(--font-bricolage)] text-5xl font-extrabold leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-9xl">
                HAVE AN IDEA?
                <br />
                LET&apos;S BUILD IT.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 lg:flex-col">
              <a
                href="https://www.instagram.com/onekimosabi?stkn=MXY1MmtjYmsxcXB1Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] backdrop-blur-xl transition hover:bg-white hover:text-red-600"
              >
                <span className="text-sm font-bold">IG</span>
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/in/ola-kasali-a915552a3?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] backdrop-blur-xl transition hover:bg-white hover:text-red-600"
              >
                LinkedIn
                <ArrowUpRight size={16} />
              </a>

              <a
                href="orlakasali2014@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] backdrop-blur-xl transition hover:bg-white hover:text-red-600"
              >
                <Mail size={16} />
                Email me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 text-[9px] uppercase tracking-[0.2em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Orla Kasali</span>

          <span>Black Switch Technologies</span>

          <a href="#top" className="flex items-center gap-2 hover:text-white">
            Back to top
            <ArrowUp size={11} />
          </a>
        </div>
      </footer>
    </main>
  );
}