"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

const HIGHLIGHTS = [
  "International curriculum",
  "Global university opportunities",
  "International perspectives",
  "Cross-cultural learning",
  "Global citizenship",
];

export default function GlobalPerspective() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
      {/* subtle background detail */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#6C0798]/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* =====================================================
            CONTENT
        ===================================================== */}
        <div className="relative z-10">
          <SectionHeading
            eyebrow="Global perspective"
            heading="Rooted in Ghana. Connected to the world."
            description="An Agape education prepares students to participate confidently in a global society, while staying firmly connected to their Ghanaian identity."
          />

          <motion.ul
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="mt-8 space-y-3"
          >
            {HIGHLIGHTS.map((item, index) => (
              <motion.li
                key={item}
                initial={
                  prefersReducedMotion
                    ? false
                    : {
                        opacity: 0,
                        x: -15,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.07,
                }}
                className="flex items-center gap-3 font-sans text-sm text-[#19151C]/75"
              >
                <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                  <span className="absolute h-5 w-5 rounded-full bg-[#6C0798]/10" />

                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#E12F41]" />
                </span>

                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* =====================================================
            GLOBE
        ===================================================== */}
        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.88,
                  y: 40,
                }
          }
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          {/* ambient purple glow */}
          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    scale: [1, 1.08, 1],
                    opacity: [0.12, 0.2, 0.12],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6C0798]/20 blur-[80px]"
          />

          {/* globe */}
          <motion.img
            src="/global.png"
            alt="Global perspective centered on Ghana"
            className="relative z-10 mx-auto w-full object-contain"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </motion.div>
      </div>
    </section>
  );
}