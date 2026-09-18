"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  GraduationCap,
  Heart,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import {
  FadeIn,
  FadeUp,
  ParallaxImage,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/Animations";

type Article = {
  category: string;
  date: string;
  headline: string;
  summary: string;
  href: string;
  image: string;
  imageAlt: string;
};

const ARTICLES: Article[] = [
  {
    category: "Academic",
    date: "Term 1",
    headline: "Middle School science fair returns",
    summary:
      "Students presented independent research projects to judges and families.",
    href: "/news/science-fair",
    image: "/images/news-science.jpg",
    imageAlt: "Students presenting science projects at Agape Academy",
  },
  {
    category: "Faith",
    date: "Term 1",
    headline: "Reflections from this term's chapel series",
    summary:
      "A look at the themes students explored in weekly chapel.",
    href: "/news/chapel-series",
    image: "/images/news-chapel.jpg",
    imageAlt: "Agape Academy students during chapel",
  },
  {
    category: "Sports",
    date: "Term 1",
    headline: "Inter-house sports day highlights",
    summary:
      "A full day of competition across every year group.",
    href: "/news/sports-day",
    image: "/images/news-sports.jpg",
    imageAlt: "Students participating in sports at Agape Academy",
  },
];

const EDITORIAL = [
  {
    number: "01",
    category: "Inside Agape",
    title: "The people behind the learning",
    description:
      "A closer look at the relationships between students, teachers and the wider Agape community.",
    icon: Users,
  },
  {
    number: "02",
    category: "Student Voice",
    title: "Finding your place",
    description:
      "Stories of confidence, friendship, leadership and the small moments that shape student life.",
    icon: Heart,
  },
  {
    number: "03",
    category: "The Classroom",
    title: "Learning beyond the textbook",
    description:
      "How academic ideas become meaningful when students connect them to the world around them.",
    icon: BookOpen,
  },
];

const TOPICS = [
  "Academics",
  "Student Life",
  "Faith",
  "Sports",
  "Arts",
  "Community",
];

export default function NewsPageClient() {
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["0%", "18%"]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.35],
    [1.08, 1.2]
  );

  return (
    <main className="overflow-hidden bg-[#FAF8F9] text-[#19151C]">

      {/* =========================================HERO========================================================= */}

      <section className="relative min-h-[88svh] overflow-hidden bg-[#19151C] text-white sm:min-h-[90vh] lg:min-h-[94vh]">

        {/* Image */}
        <motion.div
          style={{
            y: heroY,
            scale: heroScale,
          }}
          className="absolute inset-[-8%]"
        >
          <Image
            src="/news-hero.jpg"
            alt=""
            fill
            priority
            quality={90}
            className="h-full w-full object-cover object-center"
          />
        </motion.div>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-[#19151C]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#19151C]/95 via-[#19151C]/55 to-[#19151C]/15" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#19151C] via-transparent to-[#19151C]/20" />

        {/* Purple atmospheric glow */}
        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: [0, 80, -40, 0],
                  y: [0, -30, 50, 0],
                  opacity: [0.08, 0.18, 0.08, 0.12],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-[#6C0798] blur-[120px]"
        />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-end px-5 pb-8 sm:min-h-[90vh] sm:px-8 sm:pb-14 lg:min-h-[94vh] lg:px-10 lg:pb-20">

          <div className="max-w-5xl">
            <FadeUp>
              <h1 className="max-w-5xl font-serif text-[4rem] leading-[0.82] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                Life at
                <span className="block text-white/35">
                  Agape.
                </span>
              </h1>
            </FadeUp>

            <FadeUp>
              <div className="mt-8 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end sm:gap-12">

                <p className="max-w-xl font-sans text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                  Academic discovery. Student voices. Faith. Sport.
                  Creativity. Community. Stories from a school where
                  every day is part of the journey.
                </p>

              </div>
            </FadeUp>

          </div>
        </div>

        {/* Vertical label */}
        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 rotate-90 sm:block">
          <span className="font-sans text-[9px] font-bold uppercase tracking-[0.35em] text-white/30">
            Agape Journal
          </span>
        </div>

      </section>


      {/* =========================================================
          EDITORIAL TICKER
      ========================================================= */}

      <section className="overflow-hidden border-b border-[#19151C]/10 bg-[#6C0798] py-4 text-white">

        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : { x: ["0%", "-50%"] }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max"
        >
          {[...TOPICS, ...TOPICS].map((topic, index) => (
            <div
              key={`${topic}-${index}`}
              className="flex items-center"
            >
              <span className="mx-7 font-serif text-xl sm:text-2xl">
                {topic}
              </span>

              <Sparkles className="h-3.5 w-3.5 text-white/40" />
            </div>
          ))}
        </motion.div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">

            <FadeUp>
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E12F41]">
                  The Agape Journal
                </span>

                <h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
                  Stories worth
                  <span className="block text-[#6C0798]">
                    remembering.
                  </span>
                </h2>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="max-w-3xl">

                <p className="font-sans text-lg leading-8 text-[#19151C]/65 sm:text-xl sm:leading-9">
                  School life is made up of thousands of moments.
                  A question asked in class. A goal scored. A song
                  performed. A new friendship. A lesson in chapel.
                </p>

                <p className="mt-6 font-sans text-base leading-7 text-[#19151C]/50">
                  Our news and stories bring those moments together —
                  celebrating the people, ideas and experiences that
                  make Agape Academy International what it is.
                </p>

              </div>
            </FadeUp>

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURED STORY
      ========================================================= */}

      <section
        id="stories"
        className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10 lg:pb-36"
      >

        <div className="mx-auto max-w-7xl">

          <FadeUp>
            <div className="mb-8 flex items-end justify-between gap-6">

              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#6C0798]">
                  Featured
                </span>

                <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                  The story of the term.
                </h2>
              </div>

              <span className="hidden font-sans text-xs uppercase tracking-[0.18em] text-[#19151C]/35 sm:block">
                01 / Featured story
              </span>

            </div>
          </FadeUp>


          <motion.article
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <Link
              href={ARTICLES[0].href}
              className="group relative block overflow-hidden rounded-[1.75rem] bg-[#19151C] text-white sm:rounded-[2.25rem]"
            >

              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/9]">

                <motion.img
                  src={ARTICLES[0].image}
                  alt={ARTICLES[0].imageAlt}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.045 }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#19151C] via-[#19151C]/35 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#19151C]/70 via-transparent to-transparent" />


                <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-10 sm:right-10 sm:top-10">

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-md">
                    {ARTICLES[0].category}
                  </span>

                  <span className="font-sans text-xs text-white/50">
                    {ARTICLES[0].date}
                  </span>

                </div>


                <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 lg:bottom-14 lg:left-14">

                  <div className="max-w-4xl">

                    <h3 className="font-serif text-4xl leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                      {ARTICLES[0].headline}
                    </h3>

                    <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                      <p className="max-w-xl font-sans text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                        {ARTICLES[0].summary}
                      </p>

                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#19151C] transition-transform duration-500 group-hover:rotate-45">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </Link>

          </motion.article>

        </div>

      </section>


      {/* =========================================================
          LATEST STORIES
      ========================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">

        <div className="mx-auto max-w-7xl">

          <FadeUp>
            <div className="flex flex-col justify-between gap-5 border-b border-[#19151C]/10 pb-7 sm:flex-row sm:items-end">

              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E12F41]">
                  Latest stories
                </span>

                <h2 className="mt-3 font-serif text-5xl leading-none sm:text-6xl">
                  From around Agape.
                </h2>
              </div>

              <Link
                href="/news"
                className="group inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#6C0798]"
              >
                View archive
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>
          </FadeUp>


          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

            {ARTICLES.slice(1).map((article, index) => (

              <motion.article
                key={article.headline}
                initial={
                  prefersReducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 45,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-70px",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group"
              >

                <Link href={article.href} className="block">

                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#F3EFF4]">

                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#19151C] opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>

                  </div>


                  <div className="mt-5">

                    <div className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#E12F41]">
                      <span>{article.category}</span>
                      <span className="text-[#19151C]/20">•</span>
                      <span className="text-[#19151C]/35">
                        {article.date}
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif text-3xl leading-[0.98] transition-colors duration-300 group-hover:text-[#6C0798]">
                      {article.headline}
                    </h3>

                    <p className="mt-3 font-sans text-sm leading-6 text-[#19151C]/55">
                      {article.summary}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#19151C]/45 transition-all duration-300 group-hover:gap-3 group-hover:text-[#6C0798]">
                      Read story
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>

                  </div>

                </Link>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          EDITORIAL FEATURES
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#19151C] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-36">

        <div className="pointer-events-none absolute -right-40 top-10 h-[35rem] w-[35rem] rounded-full bg-[#6C0798]/20 blur-[130px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-[#E12F41]/10 blur-[120px]" />


        <div className="relative mx-auto max-w-7xl">

          <FadeUp>
            <div className="max-w-3xl">

              <span className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#E12F41]">
                Editorial
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.92] sm:text-6xl lg:text-8xl">
                Beyond the
                <span className="block text-white/30">
                  headline.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl font-sans text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                Some stories deserve more than a headline. They deserve
                conversation, context and a closer look at the people
                and ideas shaping life at Agape.
              </p>

            </div>
          </FadeUp>


          <Stagger className="mt-16 border-t border-white/10">

            {EDITORIAL.map((item) => {

              const Icon = item.icon;

              return (
                <StaggerItem key={item.number}>

                  <motion.div
                    whileHover={{
                      x: 8,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="group grid gap-6 border-b border-white/10 py-8 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-10 sm:py-10"
                  >

                    <span className="font-serif text-2xl text-white/25">
                      {item.number}
                    </span>


                    <div className="flex gap-5">

                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] sm:flex">
                        <Icon className="h-4 w-4 text-[#E12F41]" />
                      </div>

                      <div>

                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#E12F41]">
                          {item.category}
                        </span>

                        <h3 className="mt-2 font-serif text-3xl leading-none sm:text-4xl">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-xl font-sans text-sm leading-6 text-white/40">
                          {item.description}
                        </p>

                      </div>

                    </div>


                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#E12F41] group-hover:bg-[#E12F41]">

                      <ArrowUpRight className="h-4 w-4" />

                    </div>

                  </motion.div>

                </StaggerItem>
              );
            })}

          </Stagger>

        </div>

      </section>


      {/* =========================================================
          PHOTO / EDITORIAL BREAK
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#FAF8F9]">

        <div className="grid lg:grid-cols-2">

          <div className="relative min-h-[55vh] overflow-hidden lg:min-h-[750px]">

            <ParallaxImage
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=90"
              alt="Students learning together"
              className="absolute inset-0 h-full w-full"
              intensity={12}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/60 via-transparent to-transparent" />

          </div>


          <div className="flex items-center bg-[#FAF8F9] px-6 py-20 sm:px-10 lg:px-20">

            <Reveal direction="right">

              <div className="max-w-xl">

                <GraduationCap className="h-8 w-8 text-[#6C0798]" />

                <span className="mt-8 block font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E12F41]">
                  More than news
                </span>

                <h2 className="mt-5 font-serif text-5xl leading-[0.93] sm:text-6xl lg:text-7xl">
                  Every student
                  <span className="block text-[#6C0798]">
                    has a story.
                  </span>
                </h2>

                <p className="mt-7 font-sans text-base leading-7 text-[#19151C]/55 sm:text-lg sm:leading-8">
                  From first discoveries to defining achievements,
                  school life is full of stories waiting to be told.
                  Our editorial journal gives those experiences a
                  place to live.
                </p>

                <Link
                  href="/student-life"
                  className="group mt-8 inline-flex items-center gap-3 font-sans text-sm font-bold text-[#19151C]"
                >
                  Explore student life

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6C0798] text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =========================================================
          TOPIC STRIP
      ========================================================= */}

      <section className="border-y border-[#19151C]/10 bg-white px-5 py-12 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#19151C]/35">
                Explore by topic
              </span>

              <h3 className="mt-2 font-serif text-3xl">
                Follow what interests you.
              </h3>
            </div>


            <div className="flex flex-wrap gap-2">

              {TOPICS.map((topic) => (

                <Link
                  key={topic}
                  href={`/news?category=${topic.toLowerCase().replaceAll(" ", "-")}`}
                  className="rounded-full border border-[#19151C]/10 px-5 py-2.5 font-sans text-xs font-semibold text-[#19151C]/60 transition-all duration-300 hover:border-[#6C0798] hover:bg-[#6C0798] hover:text-white"
                >
                  {topic}
                </Link>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          NEWSLETTER / CTA
      ========================================================= */}

      <section className="px-5 py-5 sm:px-8 lg:px-10">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#6C0798] px-6 py-16 text-white sm:rounded-[2rem] sm:px-10 sm:py-20 lg:px-16 lg:py-24">

          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    rotate: [0, 360],
                  }
            }
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full border border-white/10"
          />

          <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#E12F41]/20 blur-[100px]" />


          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <span className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                Stay connected
              </span>

              <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.92] sm:text-6xl lg:text-8xl">
                Keep up with
                <span className="block text-white/35">
                  life at Agape.
                </span>
              </h2>

              <p className="mt-6 max-w-xl font-sans text-base leading-7 text-white/60 sm:text-lg">
                Follow the latest school news, events, achievements and
                stories from across our community.
              </p>

            </div>


            <Link
              href="/contact"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-7 font-sans text-sm font-bold text-[#19151C] transition-all duration-300 hover:bg-[#E12F41] hover:text-white"
            >
              Connect with Agape

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>


          <div className="relative mt-16 flex items-center gap-3 border-t border-white/10 pt-6">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <Sparkles className="h-4 w-4" />
            </div>

            <span className="font-sans text-xs text-white/40">
              Agape Academy International
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}