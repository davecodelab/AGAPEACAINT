"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeUp } from "@/components/Animations";

type AgapeCTAProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  logoSrc?: string;
  variant?: "light" | "dark";
};

export default function AgapeCTA({
  eyebrow = "Take the next step",
  title,
  highlight,
  description,
  primaryLabel = "Get in touch",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  logoSrc = "/school_logo.png",
  variant = "dark",
}: AgapeCTAProps) {
  const isDark = variant === "dark";

  return (
    <section className="px-4 py-6 sm:px-6 sm:py-10 lg:px-10">
      <FadeUp className="mx-auto max-w-7xl">
        <div
          className={[
            "relative overflow-hidden rounded-[1.75rem] px-6 py-10 sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-16 lg:py-16",
            isDark
              ? "bg-[#19151C] text-white"
              : "border border-[#19151C]/10 bg-white text-[#19151C]",
          ].join(" ")}
        >
          {/* Brand glow */}
          <div
            className={[
              "pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl",
              isDark
                ? "bg-[#6C0798]/25"
                : "bg-[#6C0798]/10",
            ].join(" ")}
          />

          <div
            className={[
              "pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full blur-3xl",
              isDark
                ? "bg-[#E12F41]/15"
                : "bg-[#E12F41]/10",
            ].join(" ")}
          />

          <div className="relative z-10 flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between lg:gap-16">

            {/* Content */}
            <div className="max-w-3xl">

              {/* Logo + eyebrow */}
              <div className="mb-5 flex items-center gap-3 sm:mb-7">

                <div
                  className={[
                    "flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl",
                    isDark
                      ? "bg-white"
                      : "bg-[#FAF8F9]",
                  ].join(" ")}
                >
                  <img
                    src={logoSrc}
                    alt="Agape Academy International"
                    className="h-full w-full object-contain"
                  />
                </div>

                <span
                  className={[
                    "font-sans text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs",
                    isDark
                      ? "text-white/45"
                      : "text-[#19151C]/40",
                  ].join(" ")}
                >
                  {eyebrow}
                </span>

              </div>


              {/* Heading */}
              <h2
                className={[
                  "max-w-3xl font-serif text-[2.5rem] leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl",
                  isDark ? "text-white" : "text-[#19151C]",
                ].join(" ")}
              >
                {title}

                {highlight && (
                  <span
                    className={[
                      "block",
                      isDark
                        ? "text-white/40"
                        : "text-[#6C0798]",
                    ].join(" ")}
                  >
                    {highlight}
                  </span>
                )}
              </h2>


              {/* Description */}
              {description && (
                <p
                  className={[
                    "mt-5 max-w-xl font-sans text-sm leading-6 sm:mt-6 sm:text-base sm:leading-7",
                    isDark
                      ? "text-white/50"
                      : "text-[#19151C]/55",
                  ].join(" ")}
                >
                  {description}
                </p>
              )}

            </div>


            {/* Actions */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">

              <Link
                href={primaryHref}
                className={[
                  "group inline-flex h-12 items-center justify-center gap-3 rounded-full px-6 font-sans text-xs font-semibold transition-all sm:h-13 sm:px-7 sm:text-sm",
                  isDark
                    ? "bg-white text-[#19151C] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
                    : "bg-[#6C0798] text-white hover:-translate-y-1 hover:bg-[#5B0680] hover:shadow-xl hover:shadow-[#6C0798]/20",
                ].join(" ")}
              >
                {primaryLabel}

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>


              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className={[
                    "inline-flex h-12 items-center justify-center rounded-full border px-6 font-sans text-xs font-semibold transition-all sm:h-13 sm:px-7 sm:text-sm",
                    isDark
                      ? "border-white/15 text-white hover:border-white/30 hover:bg-white/5"
                      : "border-[#19151C]/10 text-[#19151C]/70 hover:border-[#6C0798]/30 hover:bg-[#6C0798]/5 hover:text-[#6C0798]",
                  ].join(" ")}
                >
                  {secondaryLabel}
                </Link>
              )}

            </div>

          </div>


          {/* Small brand line */}
          <div
            className={[
              "relative z-10 mt-9 border-t pt-4 sm:mt-12 sm:pt-5",
              isDark
                ? "border-white/10"
                : "border-[#19151C]/10",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">

              <span
                className={[
                  "font-sans text-[9px] font-medium uppercase tracking-[0.18em]",
                  isDark
                    ? "text-white/25"
                    : "text-[#19151C]/25",
                ].join(" ")}
              >
                Agape Academy International
              </span>

              <span
                className={[
                  "hidden font-sans text-[9px] uppercase tracking-[0.18em] sm:block",
                  isDark
                    ? "text-white/20"
                    : "text-[#19151C]/20",
                ].join(" ")}
              >
                Academic excellence in Christ
              </span>

            </div>
          </div>

        </div>
      </FadeUp>
    </section>
  );
}