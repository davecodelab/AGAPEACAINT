"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const REGIONS = ["Ghana", "Africa", "United Kingdom", "United States", "Canada", "Europe", "Australia"];

export default function GlobalPathways() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Beyond Agape"
          heading="From Agape to the world."
          description="Agape prepares students for a wide range of higher education destinations. Specific university partnerships will be listed here once confirmed by the school."
          align="center"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {REGIONS.map((region, i) => (
            <motion.span
              key={region}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-full border border-[#6C0798]/25 px-5 py-2.5 font-sans text-sm text-[#6C0798]"
            >
              {region}
            </motion.span>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/academics#pathways"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#6C0798] hover:text-[#4B075F]"
          >
            Explore future pathways
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
