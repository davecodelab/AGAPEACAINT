"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

const PILLARS = [
  { title: "Academic Excellence", body: "A rigorous, well-rounded curriculum that stretches every learner." },
  { title: "Character Formation", body: "Integrity, discipline and compassion, built into daily school life." },
  { title: "Faith", body: "A Christ-centered foundation that shapes how students see the world." },
  { title: "Leadership", body: "Real opportunities to take responsibility, on campus and beyond it." },
  { title: "Global Perspective", body: "Confidence to participate in the wider world, rooted in Ghanaian identity." },
];

export default function IntroStory() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="our-story" className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-gradient-to-br from-[#6C0798]/15 to-[#19151C]/10 lg:order-2"
        >
          {/* Editorial photograph placeholder — a teacher and students in conversation */}
    <Image
    src="/cover.jpg"
    alt="Teacher speaking with Agape Academy students"
    width={800}
    height={1000}
    priority
    quality={90} 
    className="h-full w-full object-cover"
  />
        </motion.div>

        <div className="lg:order-1">
          <SectionHeading
            eyebrow="Our philosophy"
            heading="More than an education. A foundation for life."
            description="At Agape Academy International, we prepare students not simply to pass examinations, but to become thoughtful, capable and principled young people who can contribute to Ghana and the wider world."
          />

          <div className="mt-10 space-y-6">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="border-l-2 border-[#6C0798]/25 pl-5">
                <h3 className="font-serif text-lg text-[#19151C]">{pillar.title}</h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-[#19151C]/65">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 font-sans text-sm font-medium text-[#6C0798] hover:text-[#4B075F]"
          >
            Discover our story
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
