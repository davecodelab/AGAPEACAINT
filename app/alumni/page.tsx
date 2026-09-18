
import Link from "next/link";
import { ArrowRight, GraduationCap, MapPin, Quote } from "lucide-react";
import { motion } from "framer-motion";

import {
  FadeIn,
  FadeUp,
  ParallaxImage,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/Animations";

const alumniStories = [
  {
    year: "Alumni story",
    title: "From Agape to the world.",
    text:
      "Every graduating class begins a new chapter. Alumni carry forward the academic foundation, friendships, experiences and values developed during their years at Agape.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=90",
  },
  {
    year: "The journey",
    title: "Different destinations. Shared roots.",
    text:
      "University, entrepreneurship, professional life, service and new opportunities can take alumni in many different directions while the Agape experience remains part of their story.",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1600&q=90",
  },
];

const values = [
  "Academic foundation",
  "Christian character",
  "Confidence to explore",
  "Commitment to service",
];

export default function AlumniPage() {
  return (
    <main className="overflow-hidden bg-[#FAF8F9] text-[#19151C]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[82svh] overflow-hidden bg-[#19151C] text-white sm:min-h-[88vh] lg:min-h-[92vh]">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-[-5%]"
        >
          <ParallaxImage
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2400&q=90"
            alt="Graduating students"
            className="h-full w-full"
            intensity={8}
          />
        </motion.div>

        <div className="absolute inset-0 bg-[#19151C]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#19151C]/95 via-[#19151C]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#19151C] via-transparent to-transparent" />

        <motion.div
          animate={{
            x: [0, 60, -20, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-[#6C0798]/25 blur-[120px]"
        />

        <div className="relative z-10 mx-auto flex min-h-[82svh] max-w-7xl items-end px-5 pb-14 sm:min-h-[88vh] sm:px-8 sm:pb-20 lg:min-h-[92vh] lg:px-10">
          <div className="max-w-5xl">
            <FadeUp>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#E12F41]" />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
                  Alumni
                </span>
              </div>
            </FadeUp>

            <FadeUp>
              <h1 className="font-serif text-[4rem] leading-[0.84] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                Once Agape.
                <span className="block text-white/35">
                  Always connected.
                </span>
              </h1>
            </FadeUp>

            <FadeUp>
              <p className="mt-8 max-w-2xl font-sans text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                Graduation is not the end of the story. It is the beginning of
                a new chapter — and the beginning of an alumni community that
                continues beyond the school gates.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <FadeUp>
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E12F41]">
                Our alumni community
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.94] sm:text-6xl lg:text-7xl">
                Different paths.
                <span className="block text-[#6C0798]">
                  Shared beginnings.
                </span>
              </h2>
            </div>
          </FadeUp>

          <FadeUp>
            <p className="max-w-3xl font-sans text-lg leading-8 text-[#19151C]/60 sm:text-xl sm:leading-9">
              An alumni community connects past students with one another and
              with the school that helped shape their early journey. It creates
              space for stories, relationships, mentorship, celebration and
              continued connection.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* =========================================================
          STORIES
      ========================================================= */}
      <section className="bg-[#19151C] text-white">
        {alumniStories.map((story, index) => (
          <div
            key={story.title}
            className="mx-auto grid max-w-[1500px] lg:grid-cols-2"
          >
            <Reveal direction={index % 2 ? "right" : "left"}>
              <div className="relative min-h-[430px] overflow-hidden sm:min-h-[600px] lg:min-h-[700px]">
                <ParallaxImage
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 h-full w-full"
                  intensity={10}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/75 via-transparent to-transparent" />
              </div>
            </Reveal>

            <div className="flex items-center px-6 py-16 sm:px-10 sm:py-24 lg:px-20">
              <div className="max-w-xl">
                <FadeUp>
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E12F41]">
                    {story.year}
                  </span>
                </FadeUp>

                <FadeUp>
                  <h2 className="mt-5 font-serif text-5xl leading-[0.94] sm:text-6xl">
                    {story.title}
                  </h2>
                </FadeUp>

                <FadeUp>
                  <p className="mt-7 font-sans text-base leading-8 text-white/55 sm:text-lg">
                    {story.text}
                  </p>
                </FadeUp>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* =========================================================
          WHAT REMAINS
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="max-w-2xl">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#6C0798]">
                What remains
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.94] sm:text-6xl lg:text-7xl">
                More than a
                <span className="text-[#E12F41]"> school record.</span>
              </h2>
            </div>
          </FadeUp>

          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <StaggerItem key={value}>
                <div className="rounded-2xl border border-[#19151C]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <span className="font-serif text-4xl text-[#6C0798]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-8 font-sans text-sm font-bold">
                    {value}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* =========================================================
          QUOTE
      ========================================================= */}
      <section className="bg-[#E12F41] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-6xl text-center">
          <Quote className="mx-auto h-9 w-9 text-white/40" />

          <FadeUp>
            <blockquote className="mt-8 font-serif text-4xl leading-[0.94] sm:text-6xl lg:text-7xl">
              “The years at school become part of the story you carry into the
              world.”
            </blockquote>
          </FadeUp>

          <FadeIn>
            <div className="mx-auto mt-10 flex items-center justify-center gap-3">
              <GraduationCap className="h-5 w-5" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                Agape Academy International
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          ALUMNI CONNECTION CTA
      ========================================================= */}
      <section className="px-5 py-5 sm:px-8 sm:py-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#19151C] px-6 py-16 text-white sm:rounded-[2rem] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#6C0798]/30 blur-[110px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <FadeUp>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                  Stay connected
                </span>
              </FadeUp>

              <FadeUp>
                <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.94] sm:text-6xl lg:text-7xl">
                  Your Agape story
                  <span className="text-white/35"> continues.</span>
                </h2>
              </FadeUp>

              <FadeUp>
                <p className="mt-6 max-w-xl font-sans text-base leading-7 text-white/50 sm:text-lg">
                  We look forward to building an alumni community where past,
                  present and future generations can remain connected.
                </p>
              </FadeUp>
            </div>

            <Link
              href="/contact"
              className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-sans text-sm font-semibold text-[#19151C] transition hover:bg-[#E12F41] hover:text-white"
            >
              Stay connected
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}