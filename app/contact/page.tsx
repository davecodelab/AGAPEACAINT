"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import AgapeCTA from "@/components/AgapeCTA";

import {
  FadeIn,
  FadeUp,
  ParallaxImage,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/Animations";

/* -------------------------------------------------------------------------- */
/* Contact information */
/* -------------------------------------------------------------------------- */

const contactDetails = [
  {
    icon: Phone,
    label: "Call us",
    value: "+233 55 451 7116",
    href: "tel:+233554517116",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "info@agapeacademyinternational.edu.gh",
    href: "mailto:info@agapeacademyinternational.edu.gh",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Agape Academy International, Pantang West, Ghana",
    href: "https://www.google.com/maps/search/?api=1&query=Agape+Academy+International+Pantang+West+Ghana",
  },
];

/* -------------------------------------------------------------------------- */
/* Page */
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#FAF8F9] text-[#19151C]">

      {/* ------------------------------------------------------------------ */}
      {/* HERO */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative min-h-[72svh] overflow-hidden bg-[#19151C] text-white sm:min-h-[76vh]">

        <ParallaxImage
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2200&q=90"
          alt="Agape Academy students"
          className="absolute inset-0 h-full w-full"
          intensity={8}
        />

        <div className="absolute inset-0 bg-[#19151C]/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#19151C]/20 via-[#19151C]/45 to-[#19151C]" />

        <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-7xl items-end px-5 pb-10 pt-28 sm:min-h-[76vh] sm:px-6 sm:pb-16 lg:px-10 lg:pb-24">

          <Stagger className="w-full">

            <StaggerItem>
              <div className="mb-5 flex items-center gap-3 sm:mb-7">
                <span className="h-px w-8 bg-white/50 sm:w-10" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs sm:tracking-[0.22em]">
                  Contact Agape
                </span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="max-w-5xl font-serif text-[3.15rem] leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-[7.5rem]">
                Let&apos;s start a
                <span className="block text-white/40">
                  conversation.
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-7 flex max-w-2xl flex-col gap-5 sm:mt-10 sm:gap-6 md:flex-row md:items-end md:gap-10">

                <p className="max-w-xl font-sans text-sm leading-6 text-white/70 sm:text-base sm:leading-7 lg:text-lg">
                  Whether you&apos;re exploring Agape for the first time,
                  planning a campus visit, or already part of our community,
                  we&apos;re here to help.
                </p>
              </div>
            </StaggerItem>

          </Stagger>

        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* QUICK CONTACT */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative z-20 px-4 py-5 sm:px-6 sm:py-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Stagger className="overflow-hidden rounded-2xl border border-[#19151C]/10 bg-white shadow-[0_20px_70px_rgba(25,21,28,0.08)] sm:rounded-[2rem] sm:grid-cols-3 sm:grid">

            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.label} className="h-full">

                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex min-h-[76px] items-center gap-3 border-b border-[#19151C]/10 px-4 py-4 transition-colors hover:bg-[#FAF8F9] last:border-b-0 sm:min-h-[100px] sm:gap-4 sm:border-b-0 sm:border-r sm:px-6 sm:py-5 sm:last:border-r-0"
                  >

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6C0798]/10 text-[#6C0798] transition-all group-hover:scale-105 group-hover:bg-[#6C0798] group-hover:text-white sm:h-11 sm:w-11 sm:rounded-2xl">
                      <Icon size={17} strokeWidth={1.7} />
                    </span>

                    <span className="min-w-0">

                      <span className="block font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#19151C]/40 sm:text-[10px]">
                        {item.label}
                      </span>

                      <span className="mt-1 block truncate font-sans text-xs font-medium text-[#19151C]/75 sm:text-sm">
                        {item.value}
                      </span>

                    </span>

                  </a>

                </StaggerItem>
              );
            })}

          </Stagger>

        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* MAIN CONTACT AREA */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="contact-form"
        className="scroll-mt-16 px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            {/* LEFT CONTENT */}

            <Reveal direction="left">

              <div className="lg:sticky lg:top-32">

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6C0798] sm:text-xs sm:tracking-[0.2em]">
                  We&apos;re here to help
                </span>

                <h2 className="mt-4 max-w-xl font-serif text-[2.4rem] leading-[1] sm:mt-5 sm:text-5xl lg:text-6xl">
                  Tell us what
                  <span className="block text-[#6C0798]">
                    you&apos;re looking for.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg font-sans text-sm leading-6 text-[#19151C]/60 sm:mt-7 sm:text-base sm:leading-7 lg:text-lg">
                  Have a question about admissions, academics, a campus visit,
                  or life at Agape? Send us a message and our team will get
                  back to you.
                </p>


                {/* Response expectations */}

                <div className="mt-7 space-y-4 sm:mt-10">

                  <div className="flex items-start gap-3 sm:gap-4">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#6C0798]/10 text-[#6C0798] sm:h-10 sm:w-10">
                      <Clock3 size={17} />
                    </div>

                    <div>
                      <p className="font-sans text-sm font-semibold">
                        Need a quick answer?
                      </p>

                      <p className="mt-1 font-sans text-xs leading-5 text-[#19151C]/50 sm:text-sm sm:leading-6">
                        Call the school directly for urgent enquiries.
                      </p>
                    </div>

                  </div>


                  <div className="flex items-start gap-3 sm:gap-4">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E12F41]/10 text-[#E12F41] sm:h-10 sm:w-10">
                      <MessageCircle size={17} />
                    </div>

                    <div>
                      <p className="font-sans text-sm font-semibold">
                        Planning a visit?
                      </p>

                      <p className="mt-1 font-sans text-xs leading-5 text-[#19151C]/50 sm:text-sm sm:leading-6">
                        Mention it in your message and we&apos;ll help you with
                        the next step.
                      </p>
                    </div>

                  </div>

                </div>


                {/* Quote */}

                <div className="mt-8 border-l-2 border-[#6C0798]/20 pl-4 sm:mt-12 sm:pl-5">

                  <p className="font-serif text-lg leading-7 text-[#19151C]/70 sm:text-xl sm:leading-8">
                    &ldquo;Academic excellence in Christ.&rdquo;
                  </p>

                  <p className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#19151C]/35 sm:text-xs sm:tracking-[0.15em]">
                    Agape Academy International
                  </p>

                </div>

              </div>

            </Reveal>


            {/* FORM */}

            <FadeUp>

              <div className="mx-auto w-full max-w-2xl rounded-[1.5rem] border border-[#19151C]/10 bg-white p-4 shadow-[0_20px_60px_rgba(25,21,28,0.07)] sm:rounded-[2rem] sm:p-7 lg:p-9">

                <div className="mb-6 sm:mb-8">

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6C0798] sm:text-xs sm:tracking-[0.2em]">
                    Send a message
                  </span>

                  <h3 className="mt-2 font-serif text-2xl sm:mt-3 sm:text-4xl">
                    How can we help?
                  </h3>

                  <p className="mt-2 font-sans text-xs leading-5 text-[#19151C]/50 sm:mt-3 sm:text-sm sm:leading-6">
                    Complete the form below and our team will follow up with
                    you.
                  </p>

                </div>


                <form className="space-y-4 sm:space-y-5">

                  {/* Name */}

                  <div className="grid gap-4 md:grid-cols-2">

                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-1.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-[#19151C]/55 sm:mb-2 sm:text-xs"
                      >
                        First name
                      </label>

                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        required
                        placeholder="Your first name"
                        className="h-12 w-full rounded-lg border border-[#19151C]/10 bg-[#FAF8F9] px-3.5 font-sans text-xs text-[#19151C] outline-none transition-all placeholder:text-[#19151C]/30 focus:border-[#6C0798]/40 focus:bg-white focus:ring-4 focus:ring-[#6C0798]/10 sm:h-14 sm:rounded-xl sm:px-4 sm:text-sm"
                      />
                    </div>


                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-1.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-[#19151C]/55 sm:mb-2 sm:text-xs"
                      >
                        Last name
                      </label>

                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        required
                        placeholder="Your last name"
                        className="h-12 w-full rounded-lg border border-[#19151C]/10 bg-[#FAF8F9] px-3.5 font-sans text-xs text-[#19151C] outline-none transition-all placeholder:text-[#19151C]/30 focus:border-[#6C0798]/40 focus:bg-white focus:ring-4 focus:ring-[#6C0798]/10 sm:h-14 sm:rounded-xl sm:px-4 sm:text-sm"
                      />
                    </div>

                  </div>


                  {/* Email + Phone */}

                  <div className="grid gap-4 md:grid-cols-2">

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-[#19151C]/55 sm:mb-2 sm:text-xs"
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="you@example.com"
                        className="h-12 w-full rounded-lg border border-[#19151C]/10 bg-[#FAF8F9] px-3.5 font-sans text-xs text-[#19151C] outline-none transition-all placeholder:text-[#19151C]/30 focus:border-[#6C0798]/40 focus:bg-white focus:ring-4 focus:ring-[#6C0798]/10 sm:h-14 sm:rounded-xl sm:px-4 sm:text-sm"
                      />
                    </div>


                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-[#19151C]/55 sm:mb-2 sm:text-xs"
                      >
                        Phone number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+233..."
                        className="h-12 w-full rounded-lg border border-[#19151C]/10 bg-[#FAF8F9] px-3.5 font-sans text-xs text-[#19151C] outline-none transition-all placeholder:text-[#19151C]/30 focus:border-[#6C0798]/40 focus:bg-white focus:ring-4 focus:ring-[#6C0798]/10 sm:h-14 sm:rounded-xl sm:px-4 sm:text-sm"
                      />
                    </div>

                  </div>


                  {/* Enquiry type */}

                  <div>

                    <label
                      htmlFor="enquiry"
                      className="mb-1.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-[#19151C]/55 sm:mb-2 sm:text-xs"
                    >
                      What can we help with?
                    </label>

                    <select
                      id="enquiry"
                      name="enquiry"
                      required
                      defaultValue=""
                      className="h-12 w-full appearance-none rounded-lg border border-[#19151C]/10 bg-[#FAF8F9] px-3.5 font-sans text-xs text-[#19151C] outline-none transition-all focus:border-[#6C0798]/40 focus:bg-white focus:ring-4 focus:ring-[#6C0798]/10 sm:h-14 sm:rounded-xl sm:px-4 sm:text-sm"
                    >
                      <option value="" disabled>
                        Select an enquiry type
                      </option>

                      <option value="admissions">
                        Admissions
                      </option>

                      <option value="campus-visit">
                        Book a campus visit
                      </option>

                      <option value="academics">
                        Academics
                      </option>

                      <option value="student-life">
                        Student life
                      </option>

                      <option value="general">
                        General enquiry
                      </option>
                    </select>

                  </div>


                  {/* Student level */}

                  <div>

                    <label
                      htmlFor="studentLevel"
                      className="mb-1.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-[#19151C]/55 sm:mb-2 sm:text-xs"
                    >
                      Student&apos;s level

                      <span className="ml-1.5 font-normal normal-case tracking-normal text-[#19151C]/30">
                        Optional
                      </span>
                    </label>

                    <select
                      id="studentLevel"
                      name="studentLevel"
                      defaultValue=""
                      className="h-12 w-full appearance-none rounded-lg border border-[#19151C]/10 bg-[#FAF8F9] px-3.5 font-sans text-xs text-[#19151C] outline-none transition-all focus:border-[#6C0798]/40 focus:bg-white focus:ring-4 focus:ring-[#6C0798]/10 sm:h-14 sm:rounded-xl sm:px-4 sm:text-sm"
                    >
                      <option value="">
                        Select a level
                      </option>

                      <option value="early-years">
                        Early Years
                      </option>

                      <option value="primary">
                        Primary School
                      </option>

                      <option value="middle">
                        Middle School
                      </option>

                      <option value="high-school">
                        High School
                      </option>
                    </select>

                  </div>


                  {/* Message */}

                  <div>

                    <label
                      htmlFor="message"
                      className="mb-1.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-[#19151C]/55 sm:mb-2 sm:text-xs"
                    >
                      Your message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us a little about what you need..."
                      className="min-h-[130px] w-full resize-none rounded-lg border border-[#19151C]/10 bg-[#FAF8F9] px-3.5 py-3 font-sans text-xs leading-5 text-[#19151C] outline-none transition-all placeholder:text-[#19151C]/30 focus:border-[#6C0798]/40 focus:bg-white focus:ring-4 focus:ring-[#6C0798]/10 sm:min-h-[150px] sm:rounded-xl sm:px-4 sm:py-4 sm:text-sm sm:leading-6"
                    />

                  </div>


                  {/* Privacy */}

                  <div className="flex items-start gap-2.5 pt-0.5 sm:gap-3 sm:pt-1">

                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#19151C]/20 text-[#6C0798] accent-[#6C0798] focus:ring-[#6C0798]/20"
                    />

                    <label
                      htmlFor="privacy"
                      className="font-sans text-[10px] leading-4 text-[#19151C]/50 sm:text-xs sm:leading-5"
                    >
                      I agree that Agape Academy International may use the
                      information provided to respond to my enquiry.
                    </label>

                  </div>


                  {/* Submit */}

                  <button
                    type="submit"
                    className="group flex h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-[#6C0798] px-5 font-sans text-xs font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#5B0680] hover:shadow-xl hover:shadow-[#6C0798]/20 active:translate-y-0 sm:h-14 sm:rounded-xl sm:gap-3 sm:px-6 sm:text-sm"
                  >
                    Send my enquiry

                    <Send
                      size={15}
                      className="transition-transform group-hover:translate-x-1 sm:size-[17px]"
                    />
                  </button>


                  <p className="text-center font-sans text-[10px] leading-4 text-[#19151C]/35 sm:text-[11px] sm:leading-5">
                    We&apos;ll use your details only to respond to your
                    enquiry.
                  </p>

                </form>

              </div>

            </FadeUp>

          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* VISIT CAMPUS */}
      {/* ------------------------------------------------------------------ */}

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden rounded-[1.5rem] bg-[#19151C] sm:rounded-[2rem] lg:grid-cols-2">

            {/* Map */}

            <Reveal direction="left">

              <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px] lg:min-h-[620px]">

                <iframe
                  title="Agape Academy International location"
                  src="https://www.google.com/maps?q=Agape%20Academy%20International%2C%20Pantang%20West%2C%20Ghana&output=embed"
                  className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />

              </div>

            </Reveal>


            {/* Visit information */}

            <Stagger className="flex flex-col justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">

              <StaggerItem>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40 sm:text-xs sm:tracking-[0.2em]">
                  Come and see us
                </span>
              </StaggerItem>


              <StaggerItem>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:mt-5 sm:text-5xl">
                  Some things are
                  <span className="block text-white/40">
                    better experienced.
                  </span>
                </h2>
              </StaggerItem>


              <StaggerItem>
                <p className="mt-5 max-w-lg font-sans text-sm leading-6 text-white/55 sm:mt-7 sm:text-base sm:leading-7">
                  If you&apos;re considering Agape for your child, we would
                  love to welcome you to campus. Come see the environment,
                  meet our community and experience the school for yourself.
                </p>
              </StaggerItem>


              <StaggerItem>
                <div className="mt-7 flex items-start gap-3 sm:mt-9 sm:gap-4">

                  <MapPin
                    size={18}
                    className="mt-1 shrink-0 text-white/50 sm:size-5"
                  />

                  <div>

                    <p className="font-sans text-sm font-medium text-white/80">
                      Agape Academy International
                    </p>

                    <p className="mt-1 font-sans text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
                      PRM9+4R9
                      <br />
                      Pantang West, Ghana
                    </p>

                  </div>

                </div>
              </StaggerItem>


              <StaggerItem>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Agape+Academy+International+Pantang+West+Ghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 font-sans text-xs font-medium text-white transition-all hover:bg-white hover:text-[#19151C] sm:mt-9 sm:px-6 sm:py-3.5 sm:text-sm"
                >
                  Get directions

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

              </StaggerItem>

            </Stagger>

          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/* FINAL CTA */}
      {/* ------------------------------------------------------------------ */}

      
  <AgapeCTA
  eyebrow="Your next step"
  title="We'd love to hear"
  highlight="from you."
  description="Whether you have a question, want to explore admissions, or would like to visit our campus, our team is ready to help."
  primaryLabel="Contact Agape"
  primaryHref="/contact"
  secondaryLabel="Call us"
  secondaryHref="tel:+233554517116"
/>

    </main>
  );
}