"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";

// Placeholder testimonials — replace with real parent quotes once supplied.
const PARENTS = [
  { name: "Parent Name", relation: "Parent of a Grade 6 student", quote: "Our daughter has grown so much in confidence — not just in the classroom, but in how she treats other people." },
  { name: "Parent Name", relation: "Parent of two Agape students", quote: "What stood out to us was how well the teachers know each child, not just their grades." },
];

export default function ParentStories() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="From our families" heading="Parent stories" align="center" />

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {PARENTS.map((parent, i) => (
            <motion.figure
              key={i}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4"
            >
              <div className="h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-[#6C0798]/25 to-[#E12F41]/20" />
              <div>
                <blockquote className="font-serif text-lg leading-snug text-[#19151C]/85">
                  “{parent.quote}”
                </blockquote>
                <figcaption className="mt-3 font-sans text-sm text-[#19151C]/55">
                  <span className="font-medium text-[#19151C]/75">{parent.name}</span> · {parent.relation}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
