"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const SPACES = [
  { name: "Classrooms", tint: "#6C0798" },
  { name: "Science", tint: "#4B075F" },
  { name: "Library", tint: "#19151C" },
  { name: "Sport", tint: "#E12F41" },
  { name: "Creative Spaces", tint: "#8B176F" },
  { name: "Chapel", tint: "#4B075F" },
  
];

export default function CampusPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Campus"
            heading="A place to learn. A place to belong."
          />
          <Link
            href="/gallery"
            className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-medium text-[#6C0798] hover:text-[#4B075F]"
          >
            View full gallery
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {SPACES.map((space, i) => (
            <motion.div
              key={space.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href="/gallery"
                className="group flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-sm p-4"
                style={{
                  background: `linear-gradient(160deg, ${space.tint}1F 0%, #19151C0D 100%)`,
                }}
              >
                <span className="font-sans text-sm font-medium text-[#19151C]/75 transition-colors group-hover:text-[#19151C]">
                  {space.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
