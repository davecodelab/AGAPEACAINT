"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const AREAS = [
  { title: "Student Union", body: "An elected body giving students a real voice in school life." },
  { title: "Student-led initiatives", body: "Projects designed and run by students, from idea to delivery." },
  { title: "Clubs", body: "Dozens of interest groups led and organised by students themselves." },
  { title: "Fundraising & community projects", body: "Practical leadership experience beyond the classroom." },
];

export default function StudentLeadership() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Student leadership"
            heading="Leadership starts here."
            description="At Agape, leadership isn't reserved for the final year. Students shape school life from the moment they arrive."
          />
          <Link
            href="/student-life#leadership"
            className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium text-[#6C0798] hover:text-[#4B075F]"
          >
            Meet our student leaders
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {AREAS.map((area, i) => (
            <motion.div
              key={area.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="border-t border-[#19151C]/10 pt-5"
            >
              <h3 className="font-serif text-lg text-[#19151C]">{area.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[#19151C]/65">
                {area.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
