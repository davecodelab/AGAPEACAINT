"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useMediaSlot } from "../lib/use-media-slots";

const SPACES = [
  {
    name: "Classrooms",
    slotId: "home_campus_classrooms",
    fallbackUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Science",
    slotId: "home_campus_science",
    fallbackUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Library",
    slotId: "home_campus_library",
    fallbackUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Sport",
    slotId: "home_campus_sport",
    fallbackUrl: "/games_1.jpg",
  },
  {
    name: "Creative Spaces",
    slotId: "home_campus_creative",
    fallbackUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Chapel",
    slotId: "home_campus_chapel",
    fallbackUrl: "https://images.unsplash.com/photo-1548625361-195fe578b907?auto=format&fit=crop&w=800&q=85",
  },
];

function SpaceCard({ space }: { space: typeof SPACES[0] }) {
  const slot = useMediaSlot(space.slotId);

  return (
    <Link
      href="/gallery"
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-xl bg-[#19151C]/10 p-4 shadow-sm"
    >
      <img
        src={slot.currentUrl || space.fallbackUrl}
        alt={slot.altText || `${space.name} at Agape Academy`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/85 via-[#19151C]/20 to-transparent" />
      <span className="relative z-10 font-sans text-sm font-medium text-white transition-colors group-hover:text-white/90">
        {space.name}
      </span>
    </Link>
  );
}

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
              <SpaceCard space={space} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
