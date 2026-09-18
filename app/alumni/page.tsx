
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Quote,
  Globe2,
  Users,
  Heart,
  Sparkles,
} from "lucide-react";

const alumniStories = [
  {
    number: "01",
    eyebrow: "The journey",
    title: "From Agape to the world.",
    text:
      "Every graduating class begins a new chapter. Alumni carry forward the academic foundation, friendships, experiences and values developed during their years at Agape.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    eyebrow: "Shared roots",
    title: "Different destinations. One community.",
    text:
      "University, entrepreneurship, professional life, service and new opportunities can take alumni in many different directions while the Agape experience remains part of their story.",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1800&q=85",
  },
];

const values = [
  {
    number: "01",
    title: "Academic foundation",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Christian character",
    icon: Heart,
  },
  {
    number: "03",
    title: "Confidence to explore",
    icon: Globe2,
  },
  {
    number: "04",
    title: "Commitment to service",
    icon: Users,
  },
];

export default function AlumniPage() {
  return (
    <main className="overflow-hidden bg-[#FAF8F9] text-[#19151C]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[78svh] overflow-hidden bg-[#19151C] text-white sm:min-h-[86vh] lg:min-h-[92vh]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2400&q=90"
            alt="Graduating students"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-[#19151C]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#19151C] via-[#19151C]/65 to-[#19151C]/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#19151C] via-[#19151C]/20 to-transparent" />

        {/* Purple atmospheric glow */}
        <div className="pointer-events-none absolute -right-48 top-0 h-[32rem] w-[32rem] rounded-full bg-[#6C0798]/30 blur-[120px]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-7xl items-end px-5 pb-10 sm:min-h-[86vh] sm:px-8 sm:pb-16 lg:min-h-[92vh] lg:px-10 lg:pb-20">
          <div className="max-w-5xl">
            <div className="mb-5 flex items-center gap-3 sm:mb-7">

            </div>

            <h1 className="font-serif text-[2.7rem] leading-[0.9] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[5rem]">
              Once Agape.
              <span className="block text-white/35">
                Always connected.
              </span>
            </h1>

            <p className="mt-6 max-w-xl font-sans text-sm leading-6 text-white/65 sm:mt-7 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
              Graduation is not the end of the story. It is the beginning of
              a new chapter — and the beginning of an alumni community that
              continues beyond the school gates.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 font-sans text-xs font-semibold text-[#19151C] transition duration-300 hover:bg-[#E12F41] hover:text-white sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Stay connected

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Vertical editorial label */}
        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 rotate-90 sm:block">
          <span className="font-sans text-[9px] font-bold uppercase tracking-[0.35em] text-white/30">
            Agape Alumni Journal
          </span>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-7 right-6 hidden items-center gap-3 sm:flex lg:right-10">
          <span className="font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">
            Scroll to explore
          </span>

          <span className="h-px w-12 bg-white/20" />
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#E12F41] sm:text-xs">
              Our alumni community
            </span>

            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[0.9] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Different paths.
              <span className="block text-[#6C0798]">
                Shared beginnings.
              </span>
            </h2>
          </div>

          <div className="lg:pt-12">
            <p className="max-w-3xl font-sans text-lg leading-8 text-[#19151C]/60 sm:text-xl sm:leading-9">
              An alumni community connects past students with one another and
              with the school that helped shape their early journey. It creates
              space for stories, relationships, mentorship, celebration and
              continued connection.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[#6C0798]" />

              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#19151C]/40">
                Excellence in Christ
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDITORIAL STORIES
      ========================================================= */}
      <section className="bg-[#19151C] text-white">
        {alumniStories.map((story, index) => (
          <article
            key={story.number}
            className="mx-auto grid max-w-[1600px] lg:grid-cols-2"
          >
            {/* Image */}
            <div
              className={`relative min-h-[420px] overflow-hidden sm:min-h-[600px] lg:min-h-[760px] ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <img
                src={story.image}
                alt={story.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/80 via-transparent to-transparent" />

              <div className="absolute left-6 top-6 sm:left-10 sm:top-10">
                <span className="font-serif text-5xl text-white/30 sm:text-7xl">
                  {story.number}
                </span>
              </div>
            </div>

            {/* Text */}
            <div
              className={`flex items-center px-6 py-16 sm:px-10 sm:py-24 lg:px-20 lg:py-32 ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <div className="max-w-xl">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#E12F41] sm:text-xs">
                  {story.eyebrow}
                </span>

                <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                  {story.title}
                </h2>

                <p className="mt-7 font-sans text-base leading-8 text-white/55 sm:text-lg">
                  {story.text}
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#6C0798]" />

                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Agape Alumni
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* =========================================================
          LEGACY
      ========================================================= */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-[#6C0798]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#6C0798] sm:text-xs">
              What remains
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-[0.9] tracking-[-0.035em] sm:text-6xl lg:text-8xl">
              More than a{" "}
              <span className="text-[#E12F41]">
                school record.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl font-sans text-base leading-7 text-[#19151C]/55 sm:text-lg sm:leading-8">
              An Agape education is part of a longer journey. The relationships,
              character, confidence and experiences developed during school can
              continue to shape the paths students take after graduation.
            </p>
          </div>

          {/* Values */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.number}
                  className="group relative overflow-hidden rounded-2xl border border-[#19151C]/10 bg-white p-6 transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-7"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#6C0798]/5 transition duration-500 group-hover:scale-150" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <span className="font-serif text-4xl text-[#6C0798]/35">
                        {value.number}
                      </span>

                      <Icon className="h-5 w-5 text-[#E12F41]" />
                    </div>

                    <h3 className="mt-10 font-sans text-sm font-bold leading-6">
                      {value.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          QUOTE
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#E12F41] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-white/10 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <Quote className="mx-auto h-9 w-9 text-white/35" />

          <blockquote className="mt-8 font-serif text-4xl leading-[0.92] tracking-[-0.03em] sm:text-6xl lg:text-8xl">
            “The years at school become part of the story you carry into the
            world.”
          </blockquote>

          <div className="mx-auto mt-10 flex items-center justify-center gap-3">
            <GraduationCap className="h-5 w-5" />

            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white/60 sm:text-xs">
              Agape Academy International
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY CTA
      ========================================================= */}
      <section className="px-5 py-5 sm:px-8 sm:py-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#19151C] px-6 py-16 text-white sm:rounded-[2rem] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#6C0798]/30 blur-[110px]" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[20rem] w-[20rem] rounded-full bg-[#E12F41]/10 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-[#E12F41]" />

                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 sm:text-xs">
                  Stay connected
                </span>
              </div>

              <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.9] tracking-[-0.035em] sm:text-6xl lg:text-8xl">
                Your Agape story
                <span className="text-white/30"> continues.</span>
              </h2>

              <p className="mt-6 max-w-xl font-sans text-base leading-7 text-white/50 sm:text-lg">
                We look forward to building an alumni community where past,
                present and future generations can remain connected.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-full bg-white px-7 font-sans text-sm font-semibold text-[#19151C] transition duration-300 hover:bg-[#E12F41] hover:text-white"
            >
              Get in touch

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}