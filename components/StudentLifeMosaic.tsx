"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useMediaSlot } from "@/lib/use-media-slots";

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
  const sportSlot = useMediaSlot("home_mosaic_sport");

  return (
    <section className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Student life"
          heading="Learning doesn't stop at the classroom."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-5">
          {CATEGORIES.map((cat, i) => {
            const isSport = i === 0;

            return (
              <motion.div
                key={cat.name}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                className={`group relative flex aspect-square overflow-hidden rounded-xl p-5 ${
                  isSport
                    ? "col-span-2 row-span-2 aspect-auto min-h-[280px] items-end sm:min-h-[340px]"
                    : "items-end"
                }`}
                style={
                  isSport
                    ? undefined
                    : {
                        background: `linear-gradient(150deg, ${cat.tint}22 0%, #19151C10 100%)`,
                      }
                }
              >
                {isSport ? (
                  <>
                    <img
                      src={sportSlot.currentUrl || "/games_3.jpg"}
                      alt={sportSlot.altText || "Sport at Agape Academy"}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/85 via-[#19151C]/25 to-transparent" />
                    <div className="relative z-10">
                      <span className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                        Featured Activity
                      </span>
                      <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                        Sport & Athletics
                      </h3>
                      <p className="mt-1 hidden font-sans text-xs text-white/75 sm:block">
                        Inter-house games, track, basketball and teamwork.
                      </p>
                    </div>
                  </>
                ) : (
                  <span className="font-sans text-sm font-medium text-[#19151C]/70 transition-colors group-hover:text-[#19151C]">
                    {cat.name}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
