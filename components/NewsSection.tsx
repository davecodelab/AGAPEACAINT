"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Article = {
  category: string;
  date: string;
  headline: string;
  summary: string;
  href: string;
};

// Placeholder articles — wire up to the school's CMS/news feed.
const ARTICLES: Article[] = [
  { category: "Academic", date: "Term 1", headline: "Middle School science fair returns", summary: "Students presented independent research projects to judges and families.", href: "/news" },
  { category: "Faith", date: "Term 1", headline: "Reflections from this term's chapel series", summary: "A look at the themes students explored in weekly chapel.", href: "/news" },
  { category: "Sports", date: "Term 1", headline: "Inter-house sports day highlights", summary: "A full day of competition across every year group.", href: "/news" },
];

export default function NewsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="News & stories" heading="Life at Agape" />
          <Link
            href="/news"
            className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-medium text-[#6C0798] hover:text-[#4B075F]"
          >
            All stories
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.headline}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={article.href} className="group block">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-gradient-to-br from-[#6C0798]/12 to-[#19151C]/8" />
                <p className="mt-4 font-sans text-xs font-medium uppercase tracking-wide text-[#E12F41]">
                  {article.category} · {article.date}
                </p>
                <h3 className="mt-1 font-serif text-xl text-[#19151C] transition-colors group-hover:text-[#6C0798]">
                  {article.headline}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[#19151C]/60">
                  {article.summary}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
