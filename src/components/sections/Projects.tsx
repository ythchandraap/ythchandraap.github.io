import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { projects } from "../../../lib/data";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-b border-black py-14 sm:py-18">
      <div className="content-wrap">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm text-black/55">Selected work</p>
            <h2 id="projects-title" className="font-display text-3xl font-semibold sm:text-4xl">Projects</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-black/65">
            Products and systems across fintech, healthcare, and IoT.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="flex min-h-64 flex-col border border-black bg-white p-5 sm:p-6">
              {project.image ? (
                <div className="relative mb-5 aspect-[16/9] overflow-hidden border border-black/15 bg-black/5">
                  <Image
                    src={project.image}
                    alt={project.title + " project preview"}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="bg-accent px-2 py-1 font-mono text-xs">0{index + 1}</span>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Open " + project.title + " project"}
                    className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 hover:text-black/60"
                  >
                    Live project <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
              <h3 className="font-display text-xl font-semibold leading-snug">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-black/70">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.tech.map((tag) => (
                  <li key={tag} className="border border-black/20 px-2 py-1 font-mono text-xs text-black/65">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
