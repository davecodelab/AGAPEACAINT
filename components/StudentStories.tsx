"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Student = {
  name: string;
  grade: string;
  quote: string;
  interests: string;
  ambition: string;
  image: string;
};

const STUDENTS: Student[] = [
  {
    name: "Student Name",
    grade: "Grade 11",
    quote:
      "I have learned that leadership isn't about being the loudest person in the room. It's about taking responsibility.",
    interests: "Debate, chess, community outreach",
    ambition: "Studying medicine",
    image: "/images/student-1.jpg",
  },
  {
    name: "Student Name",
    grade: "Grade 9",
    quote:
      "Chapel taught me that character matters as much as grades. Both push me to do better.",
    interests: "Choir, basketball",
    ambition: "Studying engineering",
    image: "/images/student-2.jpg",
  },
  {
    name: "Student Name",
    grade: "Grade 12",
    quote:
      "The Student Union gave me my first real chance to lead a project from start to finish.",
    interests: "Student Union, art",
    ambition: "Studying international relations",
    image: "/images/student-3.jpg",
  },
];

export default function StudentStories() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white px-6 py-16 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <SectionHeading
          eyebrow="In their words"
          heading="Student stories"
        />

        {/* Introductory image */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mt-8 overflow-hidden rounded-2xl sm:mt-10"
        >
          <img
            src="/images/student-stories.jpg"
            alt="Agape Academy students learning and connecting"
            className="h-[260px] w-full object-cover sm:h-[380px] lg:h-[500px]"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/65 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 max-w-md sm:bottom-8 sm:left-8">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Life at Agape
            </p>

            <p className="mt-2 font-serif text-2xl leading-tight text-white sm:text-3xl">
              Every student has a story worth hearing.
            </p>
          </div>
        </motion.div>

        {/* Student stories */}
        <div className="mt-14 grid gap-12 sm:mt-16 sm:grid-cols-3 sm:gap-8 lg:gap-12">
          {STUDENTS.map((student, i) => (
            <motion.article
              key={student.name + i}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 24 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
            >
              {/* Student image */}
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-[#F3EFF4]">
                <img
                  src={student.image}
                  alt={`${student.name} — ${student.grade}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Subtle brand gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/35 via-transparent to-transparent opacity-70" />
              </div>

              {/* Student information */}
              <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#E12F41]">
                {student.grade}
              </p>

              <h3 className="mt-1 font-serif text-2xl text-[#19151C]">
                {student.name}
              </h3>

              <p className="mt-3 font-serif text-lg leading-snug text-[#19151C]/85">
                “{student.quote}”
              </p>

              <dl className="mt-5 space-y-1.5 font-sans text-sm leading-relaxed text-[#19151C]/55">
                <div>
                  <dt className="inline font-medium text-[#19151C]/70">
                    Interests:{" "}
                  </dt>
                  <dd className="inline">{student.interests}</dd>
                </div>

                <div>
                  <dt className="inline font-medium text-[#19151C]/70">
                    Ambition:{" "}
                  </dt>
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