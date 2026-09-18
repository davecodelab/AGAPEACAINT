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
  image: string;
  imageAlt: string;
};

const ARTICLES: Article[] = [
  {
    category: "Academic",
    date: "Term 1",
    headline: "Middle School science fair returns",
    summary:
      "Students presented independent research projects to judges and families.",
    href: "/news",
    image: "/images/news-science.jpg",
    imageAlt: "Students presenting science projects at Agape Academy",
  },
  {
    category: "Faith",
    date: "Term 1",
    headline: "Reflections from this term's chapel series",
    summary:
      "A look at the themes students explored in weekly chapel.",
    href: "/news",
    image: "/images/news-chapel.jpg",
    imageAlt: "Agape Academy students during chapel",
  },
  {
    category: "Sports",
    date: "Term 1",
    headline: "Inter-house sports day highlights",
    summary:
      "A full day of competition across every year group.",
    href: "/news",
    image: "/images/news-sports.jpg",
    imageAlt: "Students participating in sports at Agape Academy",
  },
];

export default function NewsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="News & stories"
            heading="Life at Agape"
          />

          <Link
            href="/news"
            className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-medium text-[#6C0798] transition-colors hover:text-[#4B075F]"
          >
            All stories
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Articles */}
        <div className="mt-10 grid gap-10 sm:mt-12 sm:grid-cols-3 sm:gap-8 lg:gap-10">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.headline}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
            >
              <Link
                href={article.href}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F3EFF4]">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/35 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                </div>

                {/* Category / date */}
                <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#E12F41]">
                  {article.category} · {article.date}
                </p>

                {/* Headline */}
                <h3 className="mt-2 font-serif text-xl leading-tight text-[#19151C] transition-colors duration-300 group-hover:text-[#6C0798] sm:text-2xl">
                  {article.headline}
                </h3>

                {/* Summary */}
                <p className="mt-2 font-sans text-sm leading-relaxed text-[#19151C]/60">
                  {article.summary}
                </p>

                {/* Read more */}
                <div className="mt-4 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#19151C]/50 transition-all duration-300 group-hover:gap-3 group-hover:text-[#6C0798]">
                  Read story
                  <ArrowRight size={13} />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}