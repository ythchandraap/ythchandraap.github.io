import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../../../lib/data";

const focusAreas = [
  { label: "Frontend", stack: "Next.js · React · Vue.js" },
  { label: "Backend", stack: "Go · Node.js · PHP" },
  { label: "Data", stack: "PostgreSQL · MySQL · Redis" },
];

export default function Hero() {
  return (
    <>
      <header id="top" className="border-b border-black px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-[62rem] flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Chandra Adam Pratama
          </a>
          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#projects">Projects</a>
            <a className="hover:underline" href="#experience">Experience</a>
            <a className="border border-black bg-accent px-4 py-2 font-medium hover:bg-accent-secondary" href="#contact">
              Contact <ArrowUpRight className="ml-1 inline" size={15} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <section aria-labelledby="hero-title" className="border-b border-black py-14 sm:py-20">
        <div className="content-wrap grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
          <div>
            <p className="mb-3 text-sm font-medium text-black/60">
              Fullstack Developer · {personalInfo.basedIn}
            </p>
            <h1 id="hero-title" className="max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              Building useful products from{" "}
              <span className="decoration-accent underline decoration-4 underline-offset-4">
                backend to interface.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-black/70 sm:text-lg">
              {personalInfo.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 border border-black bg-accent px-5 py-3 text-sm font-semibold shadow-[3px_3px_0_#211f22] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#211f22]">
                Explore projects <ArrowDownRight size={17} aria-hidden="true" />
              </a>
              <a href="#contact" className="inline-flex items-center border border-black px-5 py-3 text-sm font-semibold hover:bg-accent-secondary">
                Get in touch
              </a>
            </div>
          </div>

          <div aria-label="Technology focus: frontend, backend, and data" className="border border-black bg-white p-5 shadow-[5px_5px_0_#c8a9f5] sm:p-7">
            <div className="mb-5 flex items-center justify-between border-b border-black pb-4">
              <p className="font-display text-lg font-semibold">Fullstack toolkit</p>
              <span className="bg-accent-secondary px-2 py-1 font-mono text-xs">01 — 03</span>
            </div>
            <dl className="divide-y divide-black/20">
              {focusAreas.map((area, index) => (
                <div key={area.label} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4">
                  <dt className="font-mono text-xs text-black/45">0{index + 1}</dt>
                  <dd>
                    <p className="font-medium">{area.label}</p>
                    <p className="mt-1 text-sm text-black/65">{area.stack}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
