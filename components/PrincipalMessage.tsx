"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useMediaSlot } from "@/lib/use-media-slots";

export default function PrincipalMessage() {
  const prefersReducedMotion = useReducedMotion();
  const slot = useMediaSlot("home_principal");

  return (
    <section className="bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-[#19151C]/5 shadow-sm"
        >
          <img
            src={slot.currentUrl || "/girl_grad.jpg"}
            alt={slot.altText || "Principal, Agape Academy International"}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
        <div>
          <SectionHeading
            eyebrow="From our leadership"
            heading="Education is about who we help students become."
          />
          <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-[#19151C]/80">
            “Every student who walks through our gates carries a story still
            being written. Our task is not only to prepare them for
            examinations, but to help them become people of character,
            conviction and purpose — ready to serve Ghana and the world
            beyond it.”
          </p>
          <p className="mt-4 font-sans text-sm text-[#19151C]/55">
            Principal, Agape Academy International
          </p>
          <Link
            href="/about#leadership"
            className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium text-[#6C0798] hover:text-[#4B075F]"
          >
            Meet our leadership
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
