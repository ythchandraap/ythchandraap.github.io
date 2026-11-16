import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { personalInfo } from "../../../lib/data";

const contacts = [
  { label: "Email", href: "mailto:" + personalInfo.email, icon: Mail },
  { label: "GitHub", href: personalInfo.github, icon: SiGithub },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: FaLinkedinIn },
  { label: "WhatsApp", href: personalInfo.whatsapp, icon: MessageCircle },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-accent py-14 sm:py-18">
      <div className="content-wrap grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="mb-2 text-sm text-black/60">Have a project or role in mind?</p>
          <h2 id="contact-title" className="max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <a
            href={"mailto:" + personalInfo.email}
            className="mt-6 inline-flex items-center gap-2 border border-black bg-accent-secondary px-5 py-3 text-sm font-semibold shadow-[3px_3px_0_#211f22] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#211f22]"
          >
            Email me <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <ul className="flex flex-wrap gap-2 md:max-w-52 md:justify-end">
          {contacts.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 border border-black bg-white px-3 py-2 text-sm hover:bg-accent-secondary"
              >
                <Icon size={16} aria-hidden="true" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
