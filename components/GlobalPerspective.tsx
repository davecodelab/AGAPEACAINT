"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const REGIONS = [
  { name: "United Kingdom", x: 46, y: 22 },
  { name: "United States", x: 14, y: 30 },
  { name: "Canada", x: 16, y: 12 },
  { name: "Europe", x: 52, y: 18 },
  { name: "Australia", x: 86, y: 78 },
  { name: "Africa", x: 55, y: 55 },
];

const HIGHLIGHTS = [
  "International curriculum",
  "Global university opportunities",
  "International perspectives",
  "Cross-cultural learning",
  "Global citizenship",
];

export default function GlobalPerspective() {
  const prefersReducedMotion = useReducedMotion();
  const ghana = { x: 50, y: 58 };

  return (
    <section className="bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Global perspective"
            heading="Rooted in Ghana. Connected to the world."
            description="An Agape education prepares students to participate confidently in a global society, while staying firmly connected to their Ghanaian identity."
          />
          <ul className="mt-8 space-y-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-3 font-sans text-sm text-[#19151C]/75">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E12F41]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square w-full rounded-sm bg-[#FAF8F9]"
        >
          <svg viewBox="0 0 100 100" className="h-full w-full">
            {REGIONS.map((region) => (
              <line
                key={region.name}
                x1={ghana.x}
                y1={ghana.y}
                x2={region.x}
                y2={region.y}
                stroke="#6C0798"
                strokeWidth="0.4"
                strokeOpacity="0.3"
              />
            ))}
            {REGIONS.map((region) => (
              <g key={region.name}>
                <circle cx={region.x} cy={region.y} r="1.6" fill="#8B176F" />
                <text
                  x={region.x}
                  y={region.y - 3}
                  textAnchor="middle"
                  fontSize="2.6"
                  fill="#19151C"
                  fillOpacity="0.55"
                  fontFamily="var(--font-sans)"
                >
                  {region.name}
                </text>
              </g>
            ))}
            <circle cx={ghana.x} cy={ghana.y} r="3" fill="#E12F41" />
            <text
              x={ghana.x}
              y={ghana.y + 6}
              textAnchor="middle"
              fontSize="3.2"
              fontWeight={600}
              fill="#19151C"
              fontFamily="var(--font-sans)"
            >
              Ghana
            </text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
