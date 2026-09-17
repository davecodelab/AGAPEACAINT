"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const CATEGORIES = [
  { name: "Sport", tint: "#6C0798" },
  { name: "Music", tint: "#8B176F" },
  { name: "Drama", tint: "#E12F41" },
  { name: "Art", tint: "#4B075F" },
  { name: "Chess", tint: "#19151C" },
  { name: "Dance", tint: "#8B176F" },
  { name: "Clubs", tint: "#6C0798" },
  { name: "Leadership", tint: "#E12F41" },
  { name: "Community Service", tint: "#4B075F" },
  { name: "Student Events", tint: "#6C0798" },
];

export default function StudentLifeMosaic() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Student life"
          heading="Learning doesn't stop at the classroom."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-5">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
              className={`group relative flex aspect-square items-end overflow-hidden rounded-sm p-4 ${
                i === 0 ? "col-span-2 row-span-2 aspect-auto" : ""
              }`}
              style={{
                background: `linear-gradient(150deg, ${cat.tint}22 0%, #19151C10 100%)`,
              }}
            >
              <span className="font-sans text-sm font-medium text-[#19151C]/70 transition-colors group-hover:text-[#19151C]">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
