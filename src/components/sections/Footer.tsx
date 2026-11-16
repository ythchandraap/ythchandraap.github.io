import { personalInfo } from "../../../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-black px-5 py-5 sm:px-8">
      <div className="mx-auto flex max-w-[62rem] flex-wrap items-center justify-between gap-3 text-xs text-black/60">
        <p>© {new Date().getFullYear()} {personalInfo.name}</p>
        <a href="#top" className="font-medium text-black underline underline-offset-4">Back to top</a>
      </div>
    </footer>
  );
}
