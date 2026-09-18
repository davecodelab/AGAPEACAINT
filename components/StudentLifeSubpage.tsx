"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  FadeIn,
  FadeUp,
  ParallaxImage,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/Animations";

export type StudentLifeSubpageData = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  heroImage: string;
  heroAlt: string;

  stats: {
    value: string;
    label: string;
  }[];

  introEyebrow: string;
  introTitle: string;
  introText: string;

  features: {
    number: string;
    title: string;
    text: string;
    image: string;
    imageAlt: string;
  }[];

  experienceEyebrow: string;
  experienceTitle: string;
  experienceText: string;

  listTitle: string;
  listItems: string[];

  quote: string;
  quoteLabel: string;

  ctaTitle: string;
  ctaText: string;
};

export default function StudentLifeSubpage({
  data,
}: {
  data: StudentLifeSubpageData;
}) {
  return (
    <main className="overflow-hidden bg-[#FAF8F9] text-[#19151C]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[78svh] overflow-hidden bg-[#19151C] text-white sm:min-h-[82vh] lg:min-h-[90vh]">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-[-5%]"
        >
          <ParallaxImage
            src={data.heroImage}
            alt={data.heroAlt}
            className="h-full w-full"
            intensity={10}
          />
        </motion.div>

        <div className="absolute inset-0 bg-[#19151C]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#19151C]/95 via-[#19151C]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#19151C] via-transparent to-[#19151C]/20" />

        {/* Purple glow */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 30, 0],
            opacity: [0.08, 0.16, 0.08, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-48 top-10 h-[32rem] w-[32rem] rounded-full bg-[#6C0798] blur-[120px]"
        />

        <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-7xl items-end px-5 pb-12 sm:min-h-[82vh] sm:px-8 sm:pb-16 lg:min-h-[90vh] lg:px-10 lg:pb-20">
          <div className="max-w-5xl">
            {/* <FadeUp>
              <Link
                href="/student-life"
                className="mb-7 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
              >
                <ChevronRight className="h-3 w-3 rotate-180" />
                Student Life
              </Link>
            </FadeUp> */}

            <FadeUp>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#E12F41]" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white/60 sm:text-xs">
                  {data.eyebrow}
                </span>
              </div>
            </FadeUp>

            <FadeUp>
              <h1 className="max-w-5xl font-serif text-[3.7rem] leading-[0.86] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[8rem]">
                {data.title}
                <span className="block text-white/35">{data.highlight}</span>
              </h1>
            </FadeUp>

            <FadeUp>
              <p className="mt-7 max-w-2xl font-sans text-base leading-7 text-white/65 sm:mt-9 sm:text-lg sm:leading-8">
                {data.description}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-b border-[#19151C]/10 bg-white">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          {data.stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.05}>
              <div className="border-b border-[#19151C]/10 px-5 py-7 sm:border-r sm:px-8 sm:py-9 lg:border-b-0 lg:px-10">
                <span className="font-serif text-4xl text-[#6C0798] sm:text-5xl">
                  {stat.value}
                </span>

                <p className="mt-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#19151C]/45">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <FadeUp>
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E12F41]">
                {data.introEyebrow}
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.94] tracking-tight sm:text-6xl lg:text-7xl">
                {data.introTitle}
              </h2>
            </div>
          </FadeUp>

          <FadeUp>
            <p className="max-w-3xl font-sans text-lg leading-8 text-[#19151C]/60 sm:text-xl sm:leading-9">
              {data.introText}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* =========================================================
          FEATURE STORIES
      ========================================================= */}
      <section className="space-y-0 bg-[#19151C] text-white">
        {data.features.map((feature, index) => {
          const reversed = index % 2 !== 0;

          return (
            <div
              key={feature.number}
              className="mx-auto grid max-w-[1500px] lg:grid-cols-2"
            >
              <Reveal
                direction={reversed ? "right" : "left"}
                className={reversed ? "lg:order-2" : ""}
              >
                <div className="relative min-h-[380px] overflow-hidden sm:min-h-[520px] lg:min-h-[680px]">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    quality={90}
                    className="absolute inset-0 object-cover"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/75 via-transparent to-transparent" />

                  <span className="absolute bottom-6 left-6 font-serif text-7xl text-white/20 sm:bottom-10 sm:left-10 sm:text-9xl">
                    {feature.number}
                  </span>
                </div>
              </Reveal>

              <div
                className={`flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28 ${
                  reversed ? "lg:order-1" : ""
                }`}
              >
                <div className="max-w-xl">
                  <FadeUp>
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E12F41]">
                      {feature.number}
                    </span>
                  </FadeUp>

                  <FadeUp>
                    <h3 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                      {feature.title}
                    </h3>
                  </FadeUp>

                  <FadeUp>
                    <p className="mt-7 font-sans text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                      {feature.text}
                    </p>
                  </FadeUp>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* =========================================================
          EXPERIENCE / LIST
      ========================================================= */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="pointer-events-none absolute -right-48 top-0 h-[40rem] w-[40rem] rounded-full bg-[#6C0798]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <FadeUp>
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#6C0798]">
                  {data.experienceEyebrow}
                </span>

                <h2 className="mt-5 font-serif text-5xl leading-[0.94] sm:text-6xl lg:text-7xl">
                  {data.experienceTitle}
                </h2>

                <p className="mt-7 max-w-xl font-sans text-base leading-7 text-[#19151C]/55 sm:text-lg sm:leading-8">
                  {data.experienceText}
                </p>
              </div>
            </FadeUp>

            <Stagger className="space-y-3">
              <FadeUp>
                <h3 className="mb-5 font-serif text-3xl">{data.listTitle}</h3>
              </FadeUp>

              {data.listItems.map((item, index) => (
                <StaggerItem key={item}>
                  <div className="group flex items-center gap-4 rounded-2xl border border-[#19151C]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6C0798]/25 hover:shadow-xl">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6C0798]/10 text-[#6C0798]">
                      <Check className="h-4 w-4" />
                    </div>

                    <span className="flex-1 font-sans text-sm font-semibold">
                      {item}
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-[#19151C]/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUOTE
      ========================================================= */}
      <section className="bg-[#6C0798] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-6xl text-center">
          <FadeIn>
            <GraduationCap className="mx-auto h-8 w-8 text-white/45" />
          </FadeIn>

          <FadeUp>
            <blockquote className="mx-auto mt-8 max-w-5xl font-serif text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
              “{data.quote}”
            </blockquote>
          </FadeUp>

          <FadeUp>
            <p className="mt-8 font-sans text-xs font-bold uppercase tracking-[0.22em] text-white/50">
              {data.quoteLabel}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-5 py-5 sm:px-8 sm:py-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#19151C] px-6 py-16 text-white sm:rounded-[2rem] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#6C0798]/30 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#E12F41]/15 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <FadeUp>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                  Experience Agape
                </span>
              </FadeUp>

              <FadeUp>
                <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.94] sm:text-6xl lg:text-7xl">
                  {data.ctaTitle}
                </h2>
              </FadeUp>

              <FadeUp>
                <p className="mt-6 max-w-xl font-sans text-base leading-7 text-white/50 sm:text-lg">
                  {data.ctaText}
                </p>
              </FadeUp>
            </div>

            <FadeUp>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/admissions/apply"
                  className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-sans text-sm font-semibold text-[#19151C] transition hover:bg-[#E12F41] hover:text-white"
                >
                  Apply to Agape
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-13 items-center justify-center rounded-full border border-white/15 px-7 py-4 font-sans text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Book a visit
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}