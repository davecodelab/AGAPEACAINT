"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Menu, X, ChevronDown } from "lucide-react";

type MenuItem = {
  label: string;
  href: string;
};

type MenuGroup = {
  label: string;
  href?: string;
  items?: MenuItem[];
};

const NAV_ITEMS: MenuGroup[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Academics",
    items: [
      { label: "Early Years", href: "/academics#early-years" },
      { label: "Primary School", href: "/academics#primary" },
      { label: "Middle School", href: "/academics#middle" },
      { label: "High School", href: "/academics#high-school" },
      { label: "Curriculum", href: "/academics#curriculum" },
      { label: "Learning Support", href: "/academics#learning-support" },
      { label: "University Pathways", href: "/academics#pathways" },
    ],
  },
  {
    label: "Student Life",
    items: [
      { label: "Clubs", href: "/student-life#clubs" },
      { label: "Sports", href: "/student-life#sports" },
      { label: "Arts & Music", href: "/student-life#arts" },
      { label: "Student Leadership", href: "/student-life#leadership" },
      { label: "Trips & Experiences", href: "/student-life#trips" },
      { label: "Student Union", href: "/student-life#union" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Admissions",
    items: [
      { label: "Why Agape", href: "/admissions#why-agape" },
      { label: "How to Apply", href: "/admissions#how-to-apply" },
      { label: "Requirements", href: "/admissions#requirements" },
      { label: "Fees", href: "/admissions#fees" },
      { label: "Scholarships", href: "/admissions#scholarships" },
      { label: "International Students", href: "/admissions#international" },
      { label: "Book a Visit", href: "/admissions#book-a-visit" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid
          ? "bg-[#FAF8F9]/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className={`font-serif text-xl tracking-tight ${
            solid ? "text-[#6C0798]" : "text-white"
          }`}
        >
          Agape Academy

          <span className="block font-sans text-[10px] font-medium uppercase tracking-[0.18em] opacity-70">
            International
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => {
            const hasDropdown = Boolean(item.items?.length);
            const isOpen = openMenu === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  if (hasDropdown) {
                    setOpenMenu(item.label);
                  } else {
                    setOpenMenu(null);
                  }
                }}
              >
                {hasDropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenu(isOpen ? null : item.label)
                      }
                      className={`flex items-center gap-1 font-sans text-sm font-medium transition-colors ${
                        solid
                          ? "text-[#19151C] hover:text-[#6C0798]"
                          : "text-white/90 hover:text-white"
                      }`}
                      aria-expanded={Boolean(isOpen)}
                      aria-haspopup="menu"
                    >
                      {item.label}

                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Compact Dropdown */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.16 }}
                          className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3"
                        >
                          <div className="overflow-hidden rounded-2xl border border-[#19151C]/10 bg-[#FAF8F9] p-2 shadow-xl">
                            <div className="flex flex-col">
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="rounded-xl px-4 py-2.5 font-sans text-sm text-[#19151C]/75 transition-colors hover:bg-[#6C0798]/5 hover:text-[#6C0798]"
                                  onClick={() => setOpenMenu(null)}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    className={`font-sans text-sm font-medium transition-colors ${
                      solid
                        ? "text-[#19151C] hover:text-[#6C0798]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
            aria-label="Search"
            className={solid ? "text-[#19151C]" : "text-white"}
          >
            <Search size={18} />
          </button>

          <Link
            href="/admissions#book-a-visit"
            className={`font-sans text-sm font-medium ${
              solid ? "text-[#6C0798]" : "text-white"
            }`}
          >
            Book a Visit
          </Link>

          <Link
            href="/admissions#how-to-apply"
            className="rounded-full bg-[#E12F41] px-5 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-[#c72638]"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden ${
            solid ? "text-[#19151C]" : "text-white"
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-[#FAF8F9] lg:hidden"
          >
            <div className="max-h-[75vh] overflow-y-auto px-6 pb-8">
              {NAV_ITEMS.map((item) => {
                const hasDropdown = Boolean(item.items?.length);

                if (!hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="border-b border-[#19151C]/10 py-3"
                    >
                      <Link
                        href={item.href ?? "#"}
                        className="block font-sans text-base font-medium text-[#19151C]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                }

                return (
                  <details
                    key={item.label}
                    className="border-b border-[#19151C]/10 py-3"
                  >
                    <summary className="cursor-pointer font-sans text-base font-medium text-[#19151C]">
                      {item.label}
                    </summary>

                    <div className="mt-2 flex flex-col gap-1 pl-2">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="rounded-lg py-1.5 font-sans text-sm text-[#19151C]/70 transition-colors hover:text-[#6C0798]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                );
              })}

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/admissions#book-a-visit"
                  className="rounded-full border border-[#6C0798] px-5 py-3 text-center font-sans text-sm font-medium text-[#6C0798]"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Visit
                </Link>

                <Link
                  href="/admissions#how-to-apply"
                  className="rounded-full bg-[#E12F41] px-5 py-3 text-center font-sans text-sm font-medium text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}