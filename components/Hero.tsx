"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMediaSlot } from "@/lib/use-media-slots";
import { isCloudinaryUrl, isCloudinaryVideoUrl } from "@/lib/cloudinary";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroSlot = useMediaSlot("home_hero");
  const isVideo = isCloudinaryVideoUrl(heroSlot.currentUrl);
  const hasCustomMedia = Boolean(heroSlot.currentUrl && isCloudinaryUrl(heroSlot.currentUrl));

  return (
    <section className="relative flex h-[92vh] min-h-[620px] w-full items-end overflow-hidden bg-[#19151C]">
      {/* Background Video / Photo (from Media CMS when uploaded to Cloudinary) */}
      {hasCustomMedia && isVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          src={heroSlot.currentUrl}
        />
      )}
      {hasCustomMedia && !isVideo && (
        <Image
          src={heroSlot.currentUrl}
          alt={heroSlot.altText || "Agape Academy campus and students"}
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-50"
        />
      )}

      {/* Signature brand gradients (always preserves original brand colors and contrast) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4B075F] via-[#19151C] to-[#6C0798]/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#19151C] via-[#19151C]/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 sm:pb-20 lg:px-10">
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans text-sm font-medium text-white/70"
        >
          Greater Accra · Ghana
        </motion.p>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-6xl lg:text-[76px]"
        >
          Academic excellence. Christian character. Global purpose.
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-white/80"
        >
          Preparing young people to learn deeply, lead courageously and live
          with purpose.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="#our-story"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-sans text-sm font-medium text-[#19151C] transition-colors hover:bg-white/90"
          >
            Explore Agape
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/admissions#book-a-visit"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Book a Visit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
