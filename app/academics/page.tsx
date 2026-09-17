"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  Award,
  Brain,
  ClipboardCheck,
  Compass,
  Globe2,
  GraduationCap,
  Heart,
  Lightbulb,
  Users,
} from "lucide-react";

import {
  FadeUp,
  FadeIn,
  Stagger,
  StaggerItem,
  ParallaxImage,
  Reveal,
} from "@/components/Animations";
import AgapeCTA from "@/components/AgapeCTA";

/* -------------------------------------------------------------------------- */
/* Academic stages */
/* -------------------------------------------------------------------------- */

const academicStages = [
  {
    id: "early-years",
    number: "01",
    age: "Ages 3–5",
    title: "Early Years",
    subtitle: "Where curiosity begins.",
    description:
      "The earliest years of education lay the foundations for everything that follows. Our approach encourages children to explore, communicate, create and develop confidence through purposeful learning experiences.",
    points: [
      "Early literacy and communication",
      "Foundations in numeracy",
      "Creative and imaginative exploration",
      "Social and emotional development",
      "Confidence, independence and routines",
    ],
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "primary",
    number: "02",
    age: "Ages 6–10",
    title: "Primary School",
    subtitle: "Building strong foundations.",
    description:
      "Primary education is where curiosity becomes disciplined learning. Students develop essential academic skills while discovering the joy of reading, questioning, creating and solving problems.",
    points: [
      "Strong literacy and numeracy foundations",
      "Developing independent study habits",
      "Scientific and mathematical thinking",
      "Creative arts and expression",
      "Collaboration and character development",
    ],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "middle",
    number: "03",
    age: "Ages 11–13",
    title: "Middle School",
    subtitle: "Growing into independent thinkers.",
    description:
      "As students mature, learning becomes increasingly analytical and independent. Middle School provides the bridge between foundational learning and the academic depth of the senior years.",
    points: [
      "Increasing subject depth",
      "Critical thinking and analysis",
      "Research and presentation skills",
      "Growing independence",
      "Leadership and collaboration",
    ],
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "high-school",
    number: "04",
    age: "Ages 14–18",
    title: "High School",
    subtitle: "Preparing for what comes next.",
    description:
      "The senior years bring greater academic challenge, responsibility and direction. Students are encouraged to pursue excellence while developing the habits, confidence and perspective required for life beyond school.",
    points: [
      "Rigorous academic preparation",
      "Examination readiness",
      "Independent research and study",
      "University and career exploration",
      "Leadership and personal responsibility",
    ],
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1800&q=85",
  },
];

/* -------------------------------------------------------------------------- */
/* Page */
/* -------------------------------------------------------------------------- */

export default function AcademicsPage() {
  return (
    <main className="overflow-hidden bg-[#FAF8F9] text-[#19151C]">

      {/* ------------------------------------------------------------------ */}
      {/* HERO */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative min-h-[92vh] overflow-hidden bg-[#19151C] text-white">

        <ParallaxImage
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90"
          alt="Students learning together"
          className="absolute inset-0 h-full w-full opacity-45"
          intensity={8}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#19151C]/55 via-[#19151C]/35 to-[#19151C]" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-20 pt-36 lg:px-10 lg:pb-28">

          <Stagger className="w-full">

            <StaggerItem className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-white/60" />

              <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                Academics
              </span>
            </StaggerItem>

            <StaggerItem>
              <h1 className="max-w-6xl font-serif text-5xl leading-[0.92] tracking-tight sm:text-7xl lg:text-[8rem]">
                Curious minds.
                <span className="block text-white/50">
                  Confident learners.
                </span>
              </h1>
            </StaggerItem>

            <div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

              <StaggerItem>
                <p className="max-w-2xl font-sans text-base leading-7 text-white/70 sm:text-lg">
                  A rigorous, well-rounded educational journey designed to
                  develop knowledge, character, curiosity and the confidence
                  to navigate a changing world.
                </p>
              </StaggerItem>

              <StaggerItem>
                <Link
                  href="#learning-journey"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3.5 font-sans text-sm font-medium text-white transition-all hover:bg-white hover:text-[#19151C]"
                >
                  Explore the journey

                  <ArrowDown
                    size={16}
                    className="transition-transform group-hover:translate-y-1"
                  />
                </Link>
              </StaggerItem>

            </div>

          </Stagger>
        </div>

        {/* Hero floating detail */}

        <FadeIn
          delay={1}
          className="absolute bottom-8 right-6 hidden lg:block lg:right-10"
        >
          <div className="flex items-center gap-4 rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
            <GraduationCap size={18} className="text-white/70" />

            <span className="font-sans text-xs tracking-wide text-white/65">
              Early Years → High School
            </span>
          </div>
        </FadeIn>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* INTRO */}
      {/* ------------------------------------------------------------------ */}

      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            <FadeUp>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#6C0798]">
                Our Approach
              </span>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Learning that goes
                <span className="block text-[#6C0798]">
                  beyond the classroom.
                </span>
              </h2>
            </FadeUp>

            <Stagger className="space-y-7">

              <StaggerItem>
                <p className="font-sans text-lg leading-8 text-[#19151C]/70">
                  At Agape Academy International, academic excellence is not
                  about memorising more information. It is about learning how
                  to think, question, communicate, create and apply knowledge
                  with purpose.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="font-sans text-lg leading-8 text-[#19151C]/70">
                  Our academic journey is designed to evolve with the learner.
                  Younger students build confidence and foundational skills.
                  Older students develop greater independence, intellectual
                  depth and responsibility.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="font-sans text-lg leading-8 text-[#19151C]/70">
                  Throughout every stage, we seek to balance academic challenge
                  with curiosity, creativity, character and care.
                </p>
              </StaggerItem>

            </Stagger>
          </div>

          {/* Stats */}

          <Stagger
            className="mt-20 grid border-y border-[#19151C]/10 sm:grid-cols-3"
          >
            {[
              ["04", "Academic stages"],
              ["01", "Continuous journey"],
              ["∞", "Possibilities ahead"],
            ].map(([number, label]) => (
              <StaggerItem
                key={label}
                className="border-b border-[#19151C]/10 px-5 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <p className="font-serif text-4xl text-[#6C0798]">
                  {number}
                </p>

                <p className="mt-2 font-sans text-sm text-[#19151C]/55">
                  {label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* LEARNING JOURNEY */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="learning-journey"
        className="scroll-mt-20 bg-white px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <Stagger className="mb-20 max-w-3xl">

            <StaggerItem>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#6C0798]">
                The Learning Journey
              </span>
            </StaggerItem>

            <StaggerItem>
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                One journey.
                <span className="block text-[#6C0798]">
                  Four defining stages.
                </span>
              </h2>
            </StaggerItem>

          </Stagger>

          <div className="space-y-24 lg:space-y-36">

            {academicStages.map((stage, index) => {
              const reversed = index % 2 !== 0;

              return (
                <article
                  key={stage.id}
                  id={stage.id}
                  className={`scroll-mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                    reversed
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >

                  {/* Image */}

                  <Reveal direction={reversed ? "right" : "left"}>
                    <div className="relative">

                      <ParallaxImage
                        src={stage.image}
                        alt={`${stage.title} students`}
                        className="aspect-[4/3] rounded-[2rem] bg-[#19151C]"
                        intensity={8}
                      />

                      <FadeUp delay={0.15}>
                        <div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-xl sm:left-8">
                          <span className="font-serif text-3xl text-[#6C0798]">
                            {stage.number}
                          </span>

                          <span className="ml-3 font-sans text-xs font-medium uppercase tracking-[0.15em] text-[#19151C]/50">
                            {stage.age}
                          </span>
                        </div>
                      </FadeUp>

                    </div>
                  </Reveal>

                  {/* Content */}

                  <Stagger>

                    <StaggerItem>
                      <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#6C0798]">
                        {stage.age}
                      </span>
                    </StaggerItem>

                    <StaggerItem>
                      <h3 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                        {stage.title}
                      </h3>
                    </StaggerItem>

                    <StaggerItem>
                      <p className="mt-3 font-serif text-xl text-[#6C0798]">
                        {stage.subtitle}
                      </p>
                    </StaggerItem>

                    <StaggerItem>
                      <p className="mt-6 font-sans leading-7 text-[#19151C]/65">
                        {stage.description}
                      </p>
                    </StaggerItem>

                    <Stagger
                      className="mt-8 space-y-3"
                    >
                      {stage.points.map((point) => (
                        <StaggerItem key={point}>
                          <div className="flex items-start gap-3">

                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C0798]/10 text-[#6C0798]">
                              <Check
                                size={12}
                                strokeWidth={2.5}
                              />
                            </span>

                            <span className="font-sans text-sm text-[#19151C]/65">
                              {point}
                            </span>

                          </div>
                        </StaggerItem>
                      ))}
                    </Stagger>

                  </Stagger>

                </article>
              );
            })}

          </div>
        </div>
      </section>

     {/* ------------------------------------------------------------------ */}
{/* CURRICULUM — ABEKA */}
{/* ------------------------------------------------------------------ */}

<section
  id="curriculum"
  className="scroll-mt-20 bg-[#6C0798] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10 lg:py-32"
>
  <div className="mx-auto max-w-7xl">

    {/* -------------------------------------------------------------- */}
    {/* INTRO */}
    {/* -------------------------------------------------------------- */}

    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24">

      <Stagger>
        <StaggerItem>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-xs">
            Our Curriculum
          </span>
        </StaggerItem>

        <StaggerItem>
          <h2 className="mt-4 max-w-xl font-serif text-[2.6rem] leading-[0.98] tracking-tight sm:mt-5 sm:text-5xl lg:text-6xl">
            Excellence in
            <span className="block text-white/40">
              Christian education.
            </span>
          </h2>
        </StaggerItem>
      </Stagger>

      <FadeUp>
        <p className="max-w-2xl font-sans text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
          At Agape Academy International, our academic programme is built
          around the Abeka curriculum — combining rigorous academics with
          a Christian worldview and a strong foundation in character.
        </p>
      </FadeUp>

    </div>


    {/* -------------------------------------------------------------- */}
    {/* ABEKA FEATURE */}
    {/* -------------------------------------------------------------- */}

    <div className="mt-12 grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] sm:mt-16 sm:rounded-[2rem] lg:grid-cols-[1fr_1fr]">

      {/* Image */}

      <Reveal direction="left">
        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[420px] lg:min-h-[560px]">

          <ParallaxImage
            src="https://agapeacademyinternational.edu.gh/wp-content/uploads/2024/09/abeka.jpg"
            alt="Abeka curriculum at Agape Academy International"
            className="absolute inset-0 h-full w-full"
            intensity={7}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/70 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
            <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md sm:text-[10px]">
              Abeka Curriculum
            </span>
          </div>

        </div>
      </Reveal>


      {/* Content */}

      <Stagger className="flex flex-col justify-center p-6 sm:p-10 lg:p-14 xl:p-16">

        <StaggerItem>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-xs">
            Why Abeka
          </span>
        </StaggerItem>

        <StaggerItem>
          <h3 className="mt-4 max-w-xl font-serif text-3xl leading-tight sm:mt-5 sm:text-4xl lg:text-5xl">
            A curriculum grounded in
            <span className="text-white/40">
              {" "}faith and learning.
            </span>
          </h3>
        </StaggerItem>

        <StaggerItem>
          <p className="mt-5 max-w-xl font-sans text-sm leading-6 text-white/60 sm:mt-6 sm:text-base sm:leading-7">
            Abeka is a Christian American-based curriculum designed to
            provide a comprehensive education from the early years through
            Grade 12. Its approach brings together academic development,
            Christian values and purposeful learning.
          </p>
        </StaggerItem>

        <StaggerItem>
          <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
            With our foundation built on Christ and our motto,
            <span className="font-semibold text-white">
              {" "}“Excellence in Christ”
            </span>
            , Abeka provides a strong fit for the academic and moral
            foundations we seek to build at Agape.
          </p>
        </StaggerItem>

        {/* Official Abeka link */}

        <StaggerItem>
          <a
            href="https://www.abeka.com/ChristianSchool/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3.5 font-sans text-xs font-semibold text-[#19151C] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10 sm:mt-9 sm:px-6 sm:text-sm"
          >
            Learn more about Abeka

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </StaggerItem>

      </Stagger>

    </div>


    {/* -------------------------------------------------------------- */}
    {/* CURRICULUM FORMAT */}
    {/* -------------------------------------------------------------- */}

    <div className="mt-16 sm:mt-20 lg:mt-28">

      <FadeUp>
        <div className="max-w-2xl">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-xs">
            Curriculum format
          </span>

          <h3 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Structured for
            <span className="text-white/40">
              {" "}consistent progress.
            </span>
          </h3>
        </div>
      </FadeUp>


      <Stagger className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">

        {[
          {
            icon: BookOpen,
            number: "170",
            title: "Lessons",
            text: "A structured programme of lessons delivered across four 9-week quarters.",
          },
          {
            icon: ClipboardCheck,
            number: "4",
            title: "Quarters",
            text: "The academic year is organised into four focused 9-week learning periods.",
          },
          {
            icon: Award,
            number: "A–F",
            title: "Assessment",
            text: "Students are assessed through exams, tests, quizzes, classwork and homework.",
          },
          {
            icon: GraduationCap,
            number: "4.0",
            title: "High School GPA",
            text: "High school students are evaluated using a GPA scale out of 4.0.",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <StaggerItem key={item.title}>

              <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.09] sm:rounded-3xl sm:p-7">

                <div className="flex items-start justify-between">

                  <Icon
                    size={21}
                    strokeWidth={1.5}
                    className="text-white/55 transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="font-serif text-2xl text-white/25 sm:text-3xl">
                    {item.number}
                  </span>

                </div>

                <h4 className="mt-9 font-serif text-xl sm:mt-12 sm:text-2xl">
                  {item.title}
                </h4>

                <p className="mt-2.5 font-sans text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
                  {item.text}
                </p>

              </article>

            </StaggerItem>
          );
        })}

      </Stagger>

    </div>


    {/* -------------------------------------------------------------- */}
    {/* POST ABEKA */}
    {/* -------------------------------------------------------------- */}

    <div className="mt-16 border-t border-white/10 pt-16 sm:mt-20 sm:pt-20 lg:mt-28 lg:pt-28">

      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

        <Reveal direction="left">

          <div>
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-xs">
              Beyond Agape
            </span>

            <h3 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Where the
              <span className="block text-white/40">
                journey can lead.
              </span>
            </h3>
          </div>

        </Reveal>


        <Stagger className="grid gap-4 sm:grid-cols-2">

          <StaggerItem>
            <article className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:rounded-3xl sm:p-7">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <GraduationCap
                  size={19}
                  strokeWidth={1.5}
                  className="text-white/70"
                />
              </div>

              <h4 className="mt-8 font-serif text-2xl">
                Tertiary pathways
              </h4>

              <p className="mt-3 font-sans text-sm leading-6 text-white/50">
                Upon completing the Abeka curriculum, students can continue
                into tertiary education and explore opportunities locally
                and internationally.
              </p>

            </article>
          </StaggerItem>


          <StaggerItem>
            <article className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:rounded-3xl sm:p-7">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Globe2
                  size={19}
                  strokeWidth={1.5}
                  className="text-white/70"
                />
              </div>

              <h4 className="mt-8 font-serif text-2xl">
                A global outlook
              </h4>

              <p className="mt-3 font-sans text-sm leading-6 text-white/50">
                Students can supplement their diploma with standardised
                tests such as the SAT or ACT when pursuing further
                education outside Ghana.
              </p>

            </article>
          </StaggerItem>


          <StaggerItem className="sm:col-span-2">

            <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#19151C]/30 p-6 sm:flex-row sm:items-center sm:justify-between sm:rounded-3xl sm:p-7">

              <div className="max-w-xl">

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                  Explore the curriculum
                </span>

                <p className="mt-2 font-sans text-sm leading-6 text-white/55">
                  See Abeka&apos;s official curriculum information,
                  course materials and scope &amp; sequence.
                </p>

              </div>

              <a
                href="https://www.abeka.com/ChristianSchool/ScopeAndSequence.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-white/15 px-5 py-3 font-sans text-xs font-semibold text-white transition-all hover:border-white/30 hover:bg-white hover:text-[#19151C] sm:px-6 sm:py-3.5 sm:text-sm"
              >
                View Abeka scope &amp; sequence

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>

          </StaggerItem>

        </Stagger>

      </div>

    </div>

  </div>
</section>

      {/* ------------------------------------------------------------------ */}
      {/* LEARNING SUPPORT */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="learning-support"
        className="scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

            <Reveal direction="left">
              <div className="relative">

                <ParallaxImage
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1800&q=85"
                  alt="Student receiving individual learning support"
                  className="aspect-[4/5] rounded-[2.5rem]"
                  intensity={7}
                />

              </div>
            </Reveal>

            <Stagger>

              <StaggerItem>
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#6C0798]">
                  Learning Support
                </span>
              </StaggerItem>

              <StaggerItem>
                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Every learner
                  <span className="block text-[#6C0798]">
                    deserves to be understood.
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-7 font-sans text-lg leading-8 text-[#19151C]/65">
                  Children do not all learn in exactly the same way. Our
                  approach to learning support begins with understanding the
                  individual learner and identifying ways to help them engage,
                  progress and feel confident.
                </p>
              </StaggerItem>

              <Stagger className="mt-8 space-y-4">

                {[
                  "Individual needs considered within the learning journey",
                  "Collaboration between educators and families",
                  "Support that encourages independence",
                  "A focus on strengths as well as areas for growth",
                ].map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3 rounded-2xl border border-[#19151C]/10 bg-white p-4">

                      <span className="mt-0.5 text-[#6C0798]">
                        <Check size={17} />
                      </span>

                      <span className="font-sans text-sm leading-6 text-[#19151C]/65">
                        {item}
                      </span>

                    </div>
                  </StaggerItem>
                ))}

              </Stagger>

            </Stagger>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* UNIVERSITY PATHWAYS */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="pathways"
        className="scroll-mt-20 overflow-hidden bg-[#19151C] text-white"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid lg:grid-cols-2">

            <Stagger className="flex flex-col justify-center px-6 py-24 lg:px-10 lg:py-32">

              <StaggerItem>
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                  University Pathways
                </span>
              </StaggerItem>

              <StaggerItem>
                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Preparing students
                  <span className="block text-white/40">
                    for a wider world.
                  </span>
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-7 max-w-xl font-sans text-base leading-8 text-white/55 sm:text-lg">
                  The final years of school should open doors, not close them.
                  We help students think about higher education and future
                  opportunities with increasing clarity and confidence.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-9">
                  <Link
                    href="/admissions"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-sans text-sm font-semibold text-[#19151C] transition-transform hover:-translate-y-1"
                  >
                    Discover Agape

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </StaggerItem>

            </Stagger>

            <div className="relative min-h-[550px] lg:min-h-full">

              <ParallaxImage
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=90"
                alt="Students preparing for their future"
                className="absolute inset-0 h-full"
                intensity={8}
              />

              <div className="absolute inset-0 bg-[#19151C]/20" />

              <FadeUp
                delay={0.2}
                className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/15 bg-[#19151C]/55 p-7 backdrop-blur-md lg:left-10 lg:right-10"
              >
                <GraduationCap
                  size={25}
                  className="text-white/60"
                  strokeWidth={1.5}
                />

                <p className="mt-8 font-serif text-2xl">
                  Think beyond the next examination.
                </p>

                <p className="mt-3 font-sans text-sm leading-6 text-white/50">
                  Build the knowledge, habits and confidence that can carry
                  forward into higher education and life beyond school.
                </p>
              </FadeUp>

            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FINAL CTA */}
      {/* ------------------------------------------------------------------ */}
<AgapeCTA
  eyebrow="Discover Agape"
  title="Give your child"
  highlight="room to grow."
  description="Explore an education designed to develop confident, curious and grounded young people."
  primaryLabel="Explore admissions"
  primaryHref="/admissions"
/>

    </main>
  );
}