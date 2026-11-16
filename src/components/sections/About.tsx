import { Download, MapPin } from "lucide-react";
import { education, personalInfo, skills } from "../../../lib/data";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-b border-black py-14 sm:py-18">
      <div className="content-wrap">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          <div>
            <p className="mb-2 text-sm text-black/55">A little about me</p>
            <h2 id="about-title" className="font-display text-3xl font-semibold sm:text-4xl">About</h2>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-black/65">
              <MapPin size={16} aria-hidden="true" /> {personalInfo.basedIn}
            </p>
            <p className="mt-2 text-sm text-black/65">{personalInfo.experience} years building digital products</p>
            {education.map((item) => (
              <div key={item.institution} className="mt-6 border-l-2 border-accent pl-3">
                <p className="text-xs font-medium uppercase tracking-wide text-black/50">Education</p>
                <p className="mt-1 text-sm font-medium">{item.degree}</p>
                <p className="mt-1 text-xs text-black/60">{item.institution} · {item.period}</p>
              </div>
            ))}
            <a
              href="/files/cv_chandra_adam_pratama.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-black bg-white px-4 py-2 text-sm font-medium hover:bg-accent-secondary"
            >
              <Download size={16} aria-hidden="true" /> Download CV
            </a>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-black/75">
              I work across frontend, backend, and data modeling, with experience
              building hospital information systems, fintech products, and
              internal tools. I care about clear interfaces and dependable
              workflows that help people get their work done.
            </p>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.12em] text-black/55">Technologies</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill.name} className="inline-flex items-center gap-2 border border-black/25 bg-white px-3 py-2 text-sm">
                  <skill.icon size={15} aria-hidden="true" />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
