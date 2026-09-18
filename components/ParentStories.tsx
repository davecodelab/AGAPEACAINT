"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useMediaSlot } from "@/lib/use-media-slots";

const PARENTS = [
  {
    slotId: "home_parent_story_1",
    fallbackUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85",
    name: "Agape Parent",
    relation: "Parent of a Grade 6 student",
    quote: "Our daughter has grown so much in confidence — not just in the classroom, but in how she treats other people.",
  },
  {
    slotId: "home_parent_story_2",
    fallbackUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85",
    name: "Agape Parent",
    relation: "Parent of two Agape students",
    quote: "What stood out to us was how well the teachers know each child, not just their grades.",
  },
];

function ParentAvatar({ slotId, fallbackUrl, alt }: { slotId: string; fallbackUrl: string; alt: string }) {
  const slot = useMediaSlot(slotId);
  return (
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white bg-[#FAF8F9] shadow-md">
      <img
        src={slot.currentUrl || fallbackUrl}
        alt={slot.altText || alt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

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
              className="flex gap-4 rounded-2xl border border-[#19151C]/10 bg-white p-6 shadow-sm"
            >
              <ParentAvatar
                slotId={parent.slotId}
                fallbackUrl={parent.fallbackUrl}
                alt={parent.name}
              />
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
