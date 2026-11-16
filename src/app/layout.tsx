import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ythchandraap.github.io"),
  title: "Chandra Adam Pratama | Fullstack Developer",
  description:
    "Fullstack developer in Yogyakarta building web products across hospital systems, fintech, and data-driven workflows.",
  keywords: ["Fullstack Developer", "Go", "Next.js", "TypeScript", "Yogyakarta"],
  authors: [{ name: "Chandra Adam Pratama" }],
  openGraph: {
    title: "Chandra Adam Pratama | Fullstack Developer",
    description:
      "Building scalable backends and seamless user experiences across healthcare and fintech.",
    url: "https://ythchandraap.github.io",
    siteName: "Chandra Adam Pratama",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
          href="#main-content"
        >
          Skip to content
        </a>
        <main id="main-content" className="portfolio-frame">
          {children}
        </main>
      </body>
    </html>
  );
}
