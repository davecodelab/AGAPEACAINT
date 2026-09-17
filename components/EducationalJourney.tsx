"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const STAGES = [
  {
    name: "Early Years",
    ages: "Ages 3–5",
    href: "/academics#early-years",
    body: "Play-based foundations in literacy, numeracy and social confidence.",
  },
  {
    name: "Primary School",
    ages: "Ages 6–10",
    href: "/academics#primary",
    body: "Building strong academic habits alongside character and creativity.",
  },
  {
    name: "Middle School",
    ages: "Ages 11–13",
    href: "/academics#middle",
    body: "Deepening subject knowledge as students grow into independent learners.",
  },
  {
    name: "High School",
    ages: "Ages 14–18",
    href: "/academics#high-school",
    body: "Rigorous preparation for examinations, university and life beyond Agape.",
  },
];

export default function EducationalJourney() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Agape journey"
          heading="Every age. Every stage. One purpose."
          align="center"
        />

        <div className="mt-14 divide-y divide-[#19151C]/10 border-y border-[#19151C]/10">
          {STAGES.map((stage, i) => (
            <motion.div
              key={stage.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-1 items-center gap-6 py-10 sm:grid-cols-[220px_1fr_auto] sm:gap-10"
            >
              <div className="aspect-[4/3] w-full max-w-[220px] rounded-sm bg-gradient-to-br from-[#8B176F]/15 to-[#6C0798]/10 sm:aspect-square" />
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-wide text-[#E12F41]">
                  {stage.ages}
                </p>
                <h3 className="mt-1 font-serif text-2xl text-[#19151C] sm:text-3xl">
                  {stage.name}
                </h3>
                <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-[#19151C]/65">
                  {stage.body}
                </p>
              </div>
              <Link
                href={stage.href}
                className="inline-flex items-center gap-2 whitespace-nowrap font-sans text-sm font-medium text-[#6C0798] hover:text-[#4B075F]"
              >
                Explore
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
