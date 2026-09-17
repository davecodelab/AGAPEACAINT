
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Heart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import AgapeCTA from "@/components/AgapeCTA";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const values = [
  {
    number: "01",
    icon: Heart,
    title: "Love",
    description:
      "We believe children flourish when they are known, valued and encouraged. Love shapes the way we teach, lead, correct and care for every member of our community.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Excellence",
    description:
      "We pursue high standards in learning and character. Excellence at Agape means giving our best, developing strong habits and continually seeking to grow.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We encourage students to become people of honesty, responsibility and courage who do what is right even when nobody is watching.",
  },
  {
    number: "04",
    icon: Users,
    title: "Community",
    description:
      "Education is stronger when families, teachers and students work together. We nurture a community where people belong, contribute and support one another.",
  },
  {
    number: "05",
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "We want students to ask thoughtful questions, explore ideas and approach the world with wonder. Curiosity turns learning from a task into a lifelong pursuit.",
  },
  {
    number: "06",
    icon: Target,
    title: "Purpose",
    description:
      "We prepare young people not simply to succeed, but to understand who they are, what they can contribute and how their gifts can serve a greater purpose.",
  },
];

const leadership = [
  {
    role: "School Leadership",
    title: "Leading with purpose",
    description:
      "Our leadership approach brings together academic direction, pastoral care and a clear commitment to the whole child. We seek to create an environment where teachers can teach well and students can grow with confidence.",
  },
  {
    role: "Our Teachers",
    title: "Teachers who know their students",
    description:
      "Great teaching begins with knowing the learner. Our educators combine subject knowledge with patience, creativity and intentional relationships that help students discover their strengths.",
  },
  {
    role: "Our Families",
    title: "Partnership beyond the classroom",
    description:
      "Parents and guardians are essential partners in a child's education. We value open communication and meaningful collaboration between home and school.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#FAF8F9] text-[#19151C]">
      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-end overflow-hidden bg-[#6C0798] px-6 pb-20 pt-40 text-white lg:px-10 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#E12F41]/30 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-5xl"
          >
            <motion.div variants={fadeUp} className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-white/60" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                About Agape Academy International
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-5xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl"
            >
              Education with
              <span className="block text-white/60">purpose at its heart.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl font-sans text-lg leading-8 text-white/75 sm:text-xl"
            >
              Agape Academy International exists to nurture young people who
              are intellectually curious, grounded in character and equipped
              to make a meaningful difference in the world.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#our-story"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-sans text-sm font-semibold text-[#6C0798] transition-transform hover:-translate-y-0.5"
              >
                Discover our story
                <ArrowDown
                  size={16}
                  className="transition-transform group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/admissions#book-a-visit"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Visit our campus
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTRO / STORY */}
      <section
        id="our-story"
        className="scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#6C0798]">
                Our Story
              </span>

              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                More than a school.
                <span className="block text-[#6C0798]">
                  A place to become.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="space-y-7 font-sans text-base leading-8 text-[#19151C]/70 sm:text-lg"
            >
              <motion.p variants={fadeUp}>
                At Agape Academy International, we believe education should do
                more than transfer knowledge. It should help young people
                understand themselves, discover their gifts, develop strong
                character and learn how to contribute to the world around
                them.
              </motion.p>

              <motion.p variants={fadeUp}>
                Our approach brings academic excellence and Christian
                principles together in a learning environment that is
                ambitious, nurturing and deeply personal. We want students to
                experience the joy of learning while developing the discipline
                and resilience required to pursue meaningful goals.
              </motion.p>

              <motion.p variants={fadeUp}>
                Every child arrives with a unique combination of personality,
                ability, curiosity and potential. Our responsibility is to
                create the conditions in which that potential can grow. That
                means excellent teaching, meaningful relationships, thoughtful
                pastoral care and opportunities to explore life beyond the
                classroom.
              </motion.p>

              <motion.p variants={fadeUp}>
                The result is a school community where achievement matters,
                but where achievement is understood within a bigger picture:
                developing confident, compassionate and capable young people
                who know that their lives can have purpose.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section
        id="vision"
        className="scroll-mt-24 bg-white px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mb-16 max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#6C0798]"
            >
              Vision & Mission
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              A clear direction for
              <span className="text-[#6C0798]"> meaningful education.</span>
            </motion.h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="group rounded-[2rem] bg-[#6C0798] p-8 text-white sm:p-10 lg:p-12"
            >
              <div className="mb-16 flex items-center justify-between">
                <span className="rounded-full border border-white/20 px-4 py-2 font-sans text-xs uppercase tracking-[0.15em] text-white/70">
                  Our Vision
                </span>

                <Sparkles size={24} className="text-white/60" />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl">
                Young people equipped to live purposeful lives.
              </h3>

              <p className="mt-6 max-w-xl font-sans leading-7 text-white/70">
                We envision a community where students grow into confident,
                principled and capable individuals who use their knowledge,
                character and gifts to serve others and shape the future.
              </p>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="group rounded-[2rem] border border-[#19151C]/10 bg-[#FAF8F9] p-8 sm:p-10 lg:p-12"
            >
              <div className="mb-16 flex items-center justify-between">
                <span className="rounded-full border border-[#6C0798]/20 px-4 py-2 font-sans text-xs uppercase tracking-[0.15em] text-[#6C0798]">
                  Our Mission
                </span>

                <Target size={24} className="text-[#6C0798]/60" />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl">
                Academic excellence in Christ.
              </h3>

              <p className="mt-6 max-w-xl font-sans leading-7 text-[#19151C]/65">
                We provide an academically ambitious and nurturing education
                that develops the whole child — intellectually, socially,
                emotionally, physically and spiritually — within a community
                shaped by Christian values.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section
        id="leadership"
        className="scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#6C0798]">
                Leadership
              </span>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                People make
                <span className="block text-[#6C0798]">the difference.</span>
              </h2>

              <p className="mt-6 max-w-md font-sans leading-7 text-[#19151C]/65">
                A strong school is built by people who care deeply about the
                work. Our culture is shaped by educators and families who
                believe every student deserves to be seen, challenged and
                supported.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="space-y-4"
            >
              {leadership.map((item, index) => (
                <motion.article
                  key={item.role}
                  variants={fadeUp}
                  className="group rounded-3xl border border-[#19151C]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#6C0798]">
                        {item.role}
                      </span>

                      <h3 className="mt-3 font-serif text-2xl sm:text-3xl">
                        {item.title}
                      </h3>
                    </div>

                    <span className="font-serif text-3xl text-[#19151C]/10">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-5 max-w-2xl font-sans leading-7 text-[#19151C]/65">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        id="values"
        className="scroll-mt-24 bg-[#19151C] px-6 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/45"
            >
              Core Values
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl"
            >
              What shapes
              <span className="text-white/40"> life at Agape.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl font-sans text-base leading-7 text-white/55 sm:text-lg"
            >
              Our values are not simply words on a wall. They influence the
              way we teach, learn, lead, relate to one another and approach
              the opportunities and challenges of everyday school life.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.number}
                  variants={fadeUp}
                  className="group bg-[#19151C] p-7 transition-colors duration-300 hover:bg-white/[0.06] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      className="text-white/50 transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="font-sans text-xs text-white/25">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-14 font-serif text-2xl">
                    {value.title}
                  </h3>

                  <p className="mt-4 font-sans text-sm leading-6 text-white/50">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHY AGAPE */}
      <section
        id="why-agape"
        className="scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.span
                variants={fadeUp}
                className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#6C0798]"
              >
                Why Agape
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl"
              >
                Where ambition
                <span className="block text-[#6C0798]">
                  meets belonging.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl font-sans text-base leading-8 text-[#19151C]/65 sm:text-lg"
              >
                Choosing a school is about more than academics. It is about
                finding an environment where a child can feel secure enough to
                explore, challenged enough to grow and supported enough to
                become confident in who they are.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl font-sans text-base leading-8 text-[#19151C]/65 sm:text-lg"
              >
                At Agape, we bring those elements together. We take learning
                seriously while remembering that every student is a whole
                person with individual hopes, questions, strengths and needs.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8">
                <Link
                  href="/admissions"
                  className="group inline-flex items-center gap-3 font-sans text-sm font-semibold text-[#6C0798]"
                >
                  Explore admissions
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#6C0798] p-8 text-white sm:p-12">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/50">
                      The Agape Difference
                    </span>

                    <div className="mt-10 h-px w-full bg-white/15" />
                  </div>

                  <div>
                    <p className="font-serif text-4xl leading-tight sm:text-5xl">
                      “Academic excellence in Christ.”
                    </p>

                    <p className="mt-6 max-w-md font-sans text-sm leading-6 text-white/60">
                      A simple idea that captures our commitment to developing
                      capable minds, strong character and purposeful lives.
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full border border-white/10" />
                <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-[#E12F41]/70" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}

    
   <AgapeCTA
  eyebrow="The Agape difference"
  title="Rooted in purpose."
  highlight="Built for the future."
  description="Explore the vision, values and educational philosophy behind Agape Academy International."
  primaryLabel="Discover Agape"
  primaryHref="/about"
  secondaryLabel="Explore academics"
  secondaryHref="/academics"
/>
      

    </main>
  );
}

