"use client";

import Link from "next/link";
import GeoMark from "./GeoMark";

export default function AdmissionsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#6C0798] px-6 py-20 text-white sm:py-28 lg:px-10">
      <GeoMark className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px]" opacity={0.08} />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
          Could Agape be your child's next chapter?
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/80 sm:text-lg">
          Come and experience our community, meet our teachers and discover
          an education built around academic excellence, character and
          purpose.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/admissions#book-a-visit"
            className="rounded-full bg-white px-6 py-3.5 font-sans text-sm font-medium text-[#6C0798] transition-colors hover:bg-white/90"
          >
            Book a Visit
          </Link>
          <Link
            href="/admissions#how-to-apply"
            className="rounded-full bg-[#E12F41] px-6 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-[#c72638]"
          >
            Start an Application
          </Link>
          <Link
            href="/admissions#requirements"
            className="rounded-full border border-white/40 px-6 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Request Information
          </Link>
        </div>
      </div>
    </section>
  );
}
