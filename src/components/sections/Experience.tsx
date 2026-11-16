import { experiences } from "../../../lib/data";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-b border-black py-14 sm:py-18">
      <div className="content-wrap">
        <div className="mb-8">
          <p className="mb-2 text-sm text-black/55">Career</p>
          <h2 id="experience-title" className="font-display text-3xl font-semibold sm:text-4xl">Experience</h2>
        </div>

        <ol className="border-t border-black">
          {experiences.map((experience) => (
            <li key={experience.company} className="grid gap-3 border-b border-black/25 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
              <p className="font-mono text-xs leading-5 text-black/60">{experience.period}</p>
              <div>
                <h3 className="font-display text-xl font-semibold">{experience.role}</h3>
                <p className="mt-1 text-sm font-medium">
                  {experience.company} <span className="font-normal text-black/55">· {experience.location}</span>
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-black/70">
                  {experience.description.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="text-black/45">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
