"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";

// Placeholder dates — replace with the confirmed school calendar.
const EVENTS = [
  { name: "Sports Day", date: "To be confirmed" },
  { name: "Science Fair", date: "To be confirmed" },
  { name: "Career Day", date: "To be confirmed" },
  { name: "School Trips", date: "To be confirmed" },
  { name: "Parent Events", date: "To be confirmed" },
  { name: "Student Events", date: "To be confirmed" },
  { name: "Graduation", date: "To be confirmed" },
];

export default function EventsTimeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="What's on" heading="Upcoming events" />

        <div className="mt-10 divide-y divide-[#19151C]/10 border-t border-[#19151C]/10">
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.name}
              initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-center justify-between py-4"
            >
              <span className="font-serif text-lg text-[#19151C]">{event.name}</span>
              <span className="font-sans text-sm text-[#19151C]/50">{event.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
