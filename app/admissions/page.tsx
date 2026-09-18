"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  FileText,
  Globe2,
  GraduationCap,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  School,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  FadeIn,
  FadeUp,
  ParallaxImage,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/Animations";
import AgapeCTA from "@/components/AgapeCTA";
import { useMediaSlot } from "../../lib/use-media-slots";

const admissionSections = [
  {
    id: "how-to-apply",
    number: "01",
    title: "How to Apply",
    short: "Application journey",
    icon: ClipboardCheck,
  },
  {
    id: "requirements",
    number: "02",
    title: "Requirements",
    short: "What you need",
    icon: FileText,
  },
  {
    id: "fees",
    number: "03",
    title: "Fees",
    short: "Plan with clarity",
    icon: WalletCards,
  },
  {
    id: "scholarships",
    number: "04",
    title: "Scholarships",
    short: "Financial support",
    icon: BadgeCheck,
  },
  {
    id: "international",
    number: "05",
    title: "International",
    short: "Relocating to Ghana",
    icon: Globe2,
  },
  {
    id: "book-a-visit",
    number: "06",
    title: "Book a Visit",
    short: "See Agape",
    icon: MapPin,
  },
];

const applicationSteps = [
  {
    number: "01",
    title: "Start a conversation",
    text: "Tell us about your child and what you are looking for in their next school.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Submit an application",
    text: "Complete the application process and provide the information requested by the school.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Meet the school",
    text: "Connect with our team and, where applicable, take part in the relevant assessment or admissions conversation.",
    icon: Users,
  },
  {
    number: "04",
    title: "Receive next steps",
    text: "Our admissions team will guide your family through the next stage of the process.",
    icon: GraduationCap,
  },
];

const faqs = [
  {
    question: "Can we visit the school before applying?",
    answer:
      "Yes. A campus visit is a valuable way for families to experience the environment, ask questions and understand the Agape community before making an application.",
  },
  {
    question: "Do you accept families relocating to Ghana?",
    answer:
      "Our admissions team can guide relocating families through the information and next steps relevant to joining Agape.",
  },
  {
    question: "Where can I find current fees?",
    answer:
      "Fees should be confirmed directly with the school so families receive the most current and accurate information for the relevant year group.",
  },
  {
    question: "What happens after an application is submitted?",
    answer:
      "The admissions team will review the submitted information and communicate the next steps relevant to the student's application.",
  },
];

export default function AdmissionsPage() {
  const { scrollYProgress } = useScroll();
  const heroSlot = useMediaSlot("admissions_hero");
  const movingSlot = useMediaSlot("admissions_moving_to_ghana");

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["0%", "18%"],
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.35],
    [1.08, 1.18],
  );

  return (
    <main className="scroll-smooth overflow-hidden bg-[#FAF8F9] text-[#19151C]">
      {/* =========================================================
          SCROLL PROGRESS
      ========================================================= */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-[#E12F41]"
      />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[74svh] overflow-hidden bg-[#19151C] text-white sm:min-h-[82vh] lg:min-h-[94vh]">

  {/* Background image */}
  <motion.div
    style={{
      y: heroY,
      scale: heroScale,
    }}
    className="absolute inset-[-6%]"
  >
    <Image
      src={heroSlot.currentUrl || "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2400&q=90"}
      alt={heroSlot.altText || "Students learning and connecting together"}
      fill
      priority
      quality={90}
      unoptimized={Boolean(heroSlot.currentUrl && heroSlot.currentUrl.includes("res.cloudinary.com"))}
      className="h-full w-full object-cover object-[58%_center] sm:object-center"
    />
  </motion.div>

  {/* Dark cinematic overlay */}
  <div className="absolute inset-0 bg-[#19151C]/60" />

  {/* Purple atmosphere */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#19151C]/85 via-[#19151C]/45 to-transparent" />

  {/* Bottom fade */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/95 via-transparent to-[#19151C]/20" />

  {/* Animated purple glow */}
  <motion.div
    animate={{
      x: [0, 60, -30, 0],
      y: [0, -25, 35, 0],
      opacity: [0.08, 0.16, 0.08, 0.1],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full bg-[#6C0798] blur-[110px]"
  />

  {/* Content wrapper */}
  <div className="relative z-10 mx-auto flex min-h-[74svh] max-w-7xl flex-col px-5 pb-5 pt-6 sm:min-h-[82vh] sm:px-8 sm:pb-8 sm:pt-8 lg:min-h-[94vh] lg:px-10 lg:py-10">

    {/* ---------------------------------------------------------
        HERO CONTENT
    --------------------------------------------------------- */}
    <div className="flex flex-1 items-end pb-12 sm:pb-16 lg:items-center lg:pb-0">

      <div className="max-w-4xl">

        {/* Eyebrow */}
        <FadeUp>
  <div className="mb-4 flex items-center gap-3 pt-8 sm:mb-6 sm:pt-16 lg:pt-24 xl:pt-32">
    <span className="h-px w-8 bg-[#E12F41] sm:w-10" />

    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:text-xs sm:tracking-[0.25em]">
      Beyond the classroom
    </span>
  </div>
</FadeUp>

        {/* Heading */}
        <FadeUp>
          <h1 className="max-w-[21rem] font-serif text-[3.4rem] leading-[0.86] tracking-[-0.05em] sm:max-w-3xl sm:text-7xl sm:leading-[0.88] md:text-8xl lg:max-w-5xl lg:text-[8rem]">
             Begin something
            <span className="mt-2 block text-white/40 sm:mt-0">
                meaningful.
            </span>
          </h1>
        </FadeUp>

        {/* Description */}
        <FadeUp>
          <p className="mt-6 max-w-[22rem] font-sans text-sm leading-[1.55] text-white/70 sm:mt-8 sm:max-w-xl sm:text-lg sm:leading-8">
             Come and experience our community, meet our teachers
            and discover an education built around academic
            excellence, character and purpose.
          </p>
        </FadeUp>

        {/* Buttons */}
        <FadeUp>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">

            <Link
              href="#how-to-apply"
              className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-6 font-sans text-sm font-semibold text-[#19151C] transition-all duration-300 hover:bg-[#E12F41] hover:text-white sm:w-auto"
            >
              How to apply
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </Link>

            <Link
              href="#book-a-visit"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-6 font-sans text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 sm:w-auto"
            >
              Book a visit
            </Link>

          </div>
        </FadeUp>

      </div>
    </div>
  </div>

   
</section>


      {/* =========================================================
          STICKY ADMISSIONS NAV
      ========================================================= */}
      <nav className="sticky top-0 z-50 border-b border-[#19151C]/10 bg-[#FAF8F9]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-10">
          <div className="flex min-w-max items-center gap-6 py-4">
            <span className="mr-1 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#E12F41]">
              Admissions
            </span>

            {admissionSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center gap-2 font-sans text-xs font-medium text-[#19151C]/50 transition hover:text-[#6C0798]"
              >
                <span className="text-[9px] text-[#6C0798]/50">
                  {item.number}
                </span>

                {item.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <FadeUp>
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#6C0798]">
                  Choosing Agape
                </span>

                <h2 className="mt-5 max-w-md font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl">
                  The right school is a{" "}
                  <span className="text-[#E12F41]">big decision.</span>
                </h2>
              </div>
            </FadeUp>

            <div>
              <FadeUp>
                <p className="max-w-3xl font-sans text-lg leading-8 text-[#19151C]/60 sm:text-xl sm:leading-9">
                  We want families to have the opportunity to understand
                  Agape before making that decision. Our admissions
                  journey is designed to give you clear information,
                  meaningful conversations and a chance to experience
                  our school community.
                </p>
              </FadeUp>

              <FadeUp>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      icon: School,
                      title: "Discover",
                      text: "Understand our school and educational approach.",
                    },
                    {
                      icon: Users,
                      title: "Connect",
                      text: "Meet the people who make Agape what it is.",
                    },
                    {
                      icon: Heart,
                      title: "Belong",
                      text: "Discover whether Agape feels right for your family.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-[#19151C]/10 bg-white p-5"
                      >
                        <Icon className="h-5 w-5 text-[#6C0798]" />

                        <h3 className="mt-5 font-serif text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 font-sans text-sm leading-6 text-[#19151C]/50">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW TO APPLY
      ========================================================= */}
      <section
        id="how-to-apply"
        className="scroll-mt-20 bg-[#19151C] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <FadeUp>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E12F41]">
                  01 / How to apply
                </span>

                <h2 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl">
                  A clear path from{" "}
                  <span className="text-white/35">
                    interest to enrolment.
                  </span>
                </h2>

                <p className="mt-6 max-w-md font-sans leading-7 text-white/50">
                  Every family is different. Our admissions team is
                  here to guide you through the process and answer
                  your questions along the way.
                </p>
              </FadeUp>
            </div>

            <Stagger className="space-y-4">
              {applicationSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <StaggerItem key={step.number}>
                    <div className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:bg-white/[0.07] sm:p-8">
                      <div className="flex gap-5">
                        <span className="font-serif text-3xl text-[#E12F41]/70">
                          {step.number}
                        </span>

                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="font-serif text-2xl sm:text-3xl">
                              {step.title}
                            </h3>

                            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6C0798] sm:flex">
                              <Icon className="h-4 w-4" />
                            </div>
                          </div>

                          <p className="mt-3 max-w-xl font-sans text-sm leading-6 text-white/45 sm:text-base">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>

          </div>

          <FadeUp>
            <div className="mt-12 rounded-[1.5rem] bg-[#6C0798] p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                    Ready to begin?
                  </span>

                  <h3 className="mt-2 font-serif text-3xl">
                    Start a conversation with admissions.
                  </h3>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 font-sans text-sm font-semibold text-[#19151C] transition hover:bg-[#E12F41] hover:text-white"
                >
                  Contact admissions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* =========================================================
          REQUIREMENTS
      ========================================================= */}
      <section
        id="requirements"
        className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
            <Reveal direction="left">
              <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1800&q=90"
                  alt="Students in class"
                  className="aspect-[4/3] h-full w-full"
                  intensity={8}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="rounded-2xl border border-white/15 bg-[#19151C]/60 p-5 backdrop-blur-xl">
                    <FileText className="h-5 w-5 text-white" />

                    <p className="mt-3 font-serif text-2xl text-white">
                      Information made simple.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <FadeUp>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E12F41]">
                  02 / Requirements
                </span>

                <h2 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl">
                  Know what to{" "}
                  <span className="text-[#6C0798]">
                    prepare.
                  </span>
                </h2>

                <p className="mt-6 font-sans text-base leading-7 text-[#19151C]/55 sm:text-lg sm:leading-8">
                  Admission requirements can vary by year group and
                  individual circumstances. Families should confirm
                  the current requirements directly with the school
                  before submitting an application.
                </p>
              </FadeUp>

              <Stagger className="mt-9 space-y-3">
                {[
                  "Student and family information",
                  "Previous school information",
                  "Relevant academic records",
                  "Required admissions documentation",
                  "Any additional information requested by the school",
                ].map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-4 rounded-xl border border-[#19151C]/10 bg-white p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6C0798]/10 text-[#6C0798]">
                        <Check className="h-4 w-4" />
                      </div>

                      <span className="font-sans text-sm text-[#19151C]/65">
                        {item}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <p className="mt-6 font-sans text-xs leading-5 text-[#19151C]/40">
                The list above is a general guide, not a substitute
                for the school's current admissions requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEES
      ========================================================= */}
      <section
        id="fees"
        className="scroll-mt-20 bg-[#F1EDF3] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <FadeUp>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#6C0798]">
                03 / Fees
              </span>

              <h2 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl">
                Plan with{" "}
                <span className="text-[#E12F41]">
                  clarity.
                </span>
              </h2>

              <p className="mt-6 font-sans text-base leading-7 text-[#19151C]/55 sm:text-lg sm:leading-8">
                We believe families should have clear information
                when planning for school. Current fees should always
                be confirmed directly with Agape Academy International.
              </p>
            </FadeUp>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16">
            {[
              {
                icon: GraduationCap,
                title: "Year group",
                text: "Fees and related costs may depend on the student's year group.",
              },
              {
                icon: CalendarDays,
                title: "School year",
                text: "Confirm the current fee schedule for the applicable academic year.",
              },
              {
                icon: WalletCards,
                title: "Additional costs",
                text: "Ask admissions about any additional school-related costs that may apply.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <FadeUp key={item.title}>
                  <div className="h-full rounded-[1.5rem] bg-white p-7 sm:p-8">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6C0798]/10 text-[#6C0798]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-7 font-serif text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 font-sans text-sm leading-6 text-[#19151C]/50">
                      {item.text}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp>
            <div className="mt-5 flex flex-col gap-5 rounded-[1.5rem] bg-[#19151C] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                  Need current information?
                </span>

                <p className="mt-2 font-serif text-2xl">
                  Speak directly with admissions.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-white px-6 font-sans text-sm font-semibold text-[#19151C] transition hover:bg-[#E12F41] hover:text-white"
              >
                Ask about fees
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* =========================================================
          SCHOLARSHIPS
      ========================================================= */}
      <section
        id="scholarships"
        className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <FadeUp>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E12F41]">
                  04 / Scholarships
                </span>

                <h2 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl">
                  Supporting{" "}
                  <span className="text-[#6C0798]">
                    opportunity.
                  </span>
                </h2>
              </FadeUp>
            </div>

            <div>
              <FadeUp>
                <p className="max-w-2xl font-sans text-lg leading-8 text-[#19151C]/60">
                  If your family would like to understand whether
                  scholarship or financial assistance opportunities
                  are available, our admissions team can provide the
                  current information and eligibility details.
                </p>
              </FadeUp>

              <div className="mt-10 rounded-[1.5rem] bg-[#6C0798] p-7 text-white sm:p-10">
                <Sparkles className="h-6 w-6" />

                <h3 className="mt-8 font-serif text-3xl sm:text-4xl">
                  Ask about available support.
                </h3>

                <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-white/60 sm:text-base">
                  Scholarship availability, eligibility and application
                  arrangements should be confirmed with the school
                  directly.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-3 font-sans text-sm font-semibold"
                >
                  Contact admissions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERNATIONAL STUDENTS
      ========================================================= */}
      <section
        id="international"
        className="scroll-mt-20 overflow-hidden bg-[#19151C] text-white"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[480px] overflow-hidden sm:min-h-[600px] lg:min-h-[760px]">
            <ParallaxImage
              src={movingSlot.currentUrl || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=90"}
              alt={movingSlot.altText || "Students from different backgrounds"}
              className="absolute inset-0 h-full w-full"
              intensity={10}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#19151C]/80 via-transparent to-[#19151C]/10" />

            <div className="absolute bottom-7 left-5 sm:bottom-10 sm:left-10">
              <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/20 px-4 py-3 backdrop-blur-xl">
                <Globe2 className="h-4 w-4" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  A global outlook
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center px-5 py-20 sm:px-10 sm:py-28 lg:px-20 lg:py-32">
            <div className="max-w-xl">
              <FadeUp>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E12F41]">
                  05 / International students
                </span>

                <h2 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                  Moving to Ghana?
                </h2>

                <p className="mt-7 font-sans text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                  Relocating a family involves more than choosing a
                  school. Our admissions team can help families
                  understand the school experience and the steps
                  involved in joining Agape.
                </p>
              </FadeUp>

              <Stagger className="mt-10 space-y-3">
                {[
                  {
                    icon: Globe2,
                    title: "Relocation conversations",
                    text: "Talk through your family's situation and school expectations.",
                  },
                  {
                    icon: School,
                    title: "School transition",
                    text: "Understand how your child's transition into Agape can be approached.",
                  },
                  {
                    icon: MapPin,
                    title: "Experience the campus",
                    text: "Arrange a visit when possible and see the community first-hand.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <StaggerItem key={item.title}>
                      <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6C0798]">
                          <Icon className="h-4 w-4" />
                        </div>

                        <div>
                          <h3 className="font-sans text-sm font-semibold">
                            {item.title}
                          </h3>

                          <p className="mt-1 font-sans text-sm leading-6 text-white/40">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </Stagger>

              <FadeUp>
                <Link
                  href="/contact"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-sans text-sm font-semibold text-[#19151C] transition hover:bg-[#E12F41] hover:text-white"
                >
                  Talk to admissions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOOK A VISIT
      ========================================================= */}
      <section
        id="book-a-visit"
        className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[1.75rem] bg-[#E12F41] text-white sm:rounded-[2rem]">
            <div className="grid lg:grid-cols-[1fr_0.8fr]">
              <div className="p-7 sm:p-10 lg:p-16">
                <FadeUp>
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    06 / Book a visit
                  </span>

                  <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                    Don't just imagine Agape.
                    <span className="block text-white/40">
                      Experience it.
                    </span>
                  </h2>

                  <p className="mt-7 max-w-xl font-sans text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                    Come onto campus, see the learning environment,
                    meet our team and ask the questions that matter
                    to your family.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-9 inline-flex h-12 items-center justify-center gap-3 rounded-full bg-white px-6 font-sans text-sm font-semibold text-[#19151C] transition hover:bg-[#19151C] hover:text-white"
                  >
                    Book a campus visit
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </FadeUp>
              </div>

              <div className="relative min-h-[350px] overflow-hidden lg:min-h-[500px]">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=90"
                  alt="School campus"
                  className="absolute inset-0 h-full w-full"
                  intensity={8}
                />

                <div className="absolute inset-0 bg-[#19151C]/25" />

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-[#19151C]/50 p-4 backdrop-blur-xl">
                    <MapPin className="h-5 w-5" />

                    <div>
                      <p className="font-sans text-xs font-semibold">
                        Agape Academy International
                      </p>

                      <p className="mt-1 font-sans text-[10px] text-white/50">
                        Pantang West, Ghana
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-[#F1EDF3] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <FadeUp>
              <CircleHelp className="mx-auto h-7 w-7 text-[#6C0798]" />

              <h2 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl">
                Questions families ask.
              </h2>

              <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-6 text-[#19151C]/50 sm:text-base">
                If you cannot find the information you need, our
                admissions team can help.
              </p>
            </FadeUp>
          </div>

          <div className="mt-12 space-y-3 sm:mt-16">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="group rounded-2xl border border-[#19151C]/10 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 font-serif text-xl sm:p-7 sm:text-2xl [&::-webkit-details-marker]:hidden">
                  {faq.question}

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6C0798]/10 text-[#6C0798] transition duration-300 group-open:rotate-45">
                    <span className="text-xl font-light">+</span>
                  </span>
                </summary>

                <div className="px-5 pb-6 sm:px-7 sm:pb-8">
                  <p className="max-w-3xl font-sans text-sm leading-7 text-[#19151C]/55 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-5 pb-5 pt-20 sm:px-8 sm:pb-8 sm:pt-28 lg:px-10 lg:pb-10 lg:pt-36">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#19151C] px-6 py-16 text-white sm:rounded-[2rem] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <motion.div
            animate={{
              x: [0, 50, -20, 0],
              y: [0, -20, 30, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#6C0798]/30 blur-[100px]"
          />

          <motion.div
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 30, -20, 0],
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#E12F41]/20 blur-[100px]"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <FadeUp>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-white/35">
                  Your next chapter
                </span>

                <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                  Let's take the{" "}
                  <span className="text-white/35">
                    first step.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl font-sans text-base leading-7 text-white/50 sm:text-lg">
                  Speak with our admissions team, arrange a visit and
                  discover whether Agape is the right next chapter
                  for your family.
                </p>
              </FadeUp>
            </div>

            <FadeUp>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-white px-7 font-sans text-sm font-semibold text-[#19151C] transition hover:bg-[#E12F41] hover:text-white"
                >
                  Contact admissions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/academics"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-7 font-sans text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore academics
                </Link>
              </div>
            </FadeUp>
          </div>

          <div className="relative mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6C0798]">
                <GraduationCap className="h-4 w-4" />
              </div>

              <span className="font-sans text-xs text-white/35">
                Agape Academy International
              </span>
            </div>

            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/20">
              Excellence in Christ
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}