import Link from "next/link";
import GeoMark from "./GeoMark";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Academics", href: "/academics" },
      { label: "Student Life", href: "/student-life" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "How to Apply", href: "/admissions#how-to-apply" },
      { label: "Fees", href: "/admissions#fees" },
      { label: "Scholarships", href: "/admissions#scholarships" },
      { label: "International Students", href: "/admissions#international" },
      { label: "Book a Visit", href: "/admissions#book-a-visit" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Parents", href: "/community#parents" },
      { label: "Alumni", href: "/community#alumni" },
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
      { label: "Careers", href: "/community#careers" },
    ],
  },
  {
    title: "Portals",
    links: [
      // These typically point to an external login system once one exists.
      { label: "Parent Portal", href: "#" },
      { label: "Student Portal", href: "#" },
      { label: "Staff Portal", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#19151C] px-6 pb-10 pt-16 text-white sm:pt-20 lg:px-10">
      <GeoMark className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px]" opacity={0.06} />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <p className="font-serif text-2xl">Agape Academy</p>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              International
            </p>
            <p className="mt-4 max-w-xs font-serif text-lg leading-snug text-white/70">
              Christ-centered education for a brighter future.
            </p>
            <div className="mt-6 space-y-1 font-sans text-sm text-white/60">
              <p>Greater Accra, Ghana</p>
              <p>+233 (0)00 000 0000</p>
              <p>admissions@agapeacademy.edu.gh</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="font-sans text-sm font-medium text-white">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-sans text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-white/40">
            © {new Date().getFullYear()} Agape Academy International. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 font-sans text-xs text-white/50">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/safeguarding" className="hover:text-white">Safeguarding</Link>
            <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
