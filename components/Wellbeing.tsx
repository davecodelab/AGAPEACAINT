"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const AREAS = [
  "Pastoral care", "Student support", "Teacher relationships",
  "Safeguarding", "Mental wellbeing", "Community & belonging",
];

export default function Wellbeing() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] w-full rounded-sm bg-gradient-to-br from-[#E12F41]/10 to-[#6C0798]/10"
          />
          <div>
            <SectionHeading
              eyebrow="Wellbeing"
              heading="Known. Supported. Encouraged."
              description="Every student at Agape is known by name — not just by their teachers, but by a wider community invested in their growth."
            />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {AREAS.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-[#19151C]/12 px-4 py-2 font-sans text-sm text-[#19151C]/75"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
