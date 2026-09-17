"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Student = {
  name: string;
  grade: string;
  quote: string;
  interests: string;
  ambition: string;
};

// Placeholder profiles — replace with real students once the school
// provides names, quotes and consent for publication.
const STUDENTS: Student[] = [
  {
    name: "Student Name",
    grade: "Grade 11",
    quote: "I have learned that leadership isn't about being the loudest person in the room. It's about taking responsibility.",
    interests: "Debate, chess, community outreach",
    ambition: "Studying medicine",
  },
  {
    name: "Student Name",
    grade: "Grade 9",
    quote: "Chapel taught me that character matters as much as grades. Both push me to do better.",
    interests: "Choir, basketball",
    ambition: "Studying engineering",
  },
  {
    name: "Student Name",
    grade: "Grade 12",
    quote: "The Student Union gave me my first real chance to lead a project from start to finish.",
    interests: "Student Union, art",
    ambition: "Studying international relations",
  },
];

export default function StudentStories() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="In their words" heading="Student stories" />

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {STUDENTS.map((student, i) => (
            <motion.article
              key={i}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="aspect-[4/5] w-full rounded-sm bg-gradient-to-br from-[#6C0798]/12 to-[#19151C]/8" />
              <p className="mt-5 font-sans text-xs font-medium uppercase tracking-wide text-[#E12F41]">
                {student.grade}
              </p>
              <h3 className="mt-1 font-serif text-xl text-[#19151C]">{student.name}</h3>
              <p className="mt-3 font-serif text-lg leading-snug text-[#19151C]/85">
                “{student.quote}”
              </p>
              <dl className="mt-4 space-y-1 font-sans text-sm text-[#19151C]/55">
                <div>
                  <dt className="inline font-medium text-[#19151C]/70">Interests: </dt>
                  <dd className="inline">{student.interests}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-[#19151C]/70">Ambition: </dt>
                  <dd className="inline">{student.ambition}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
