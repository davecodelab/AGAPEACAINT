"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type PreloaderProps = {
  /** Minimum time the preloader stays visible, so it never just flashes. */
  minDurationMs?: number;
  /** Optional path to a real logo image (e.g. "/logo.svg"). Falls back to the drawn geometric mark. */
  logoSrc?: string;
};

const NESTED_SQUARES = 4;

export default function Preloader({ minDurationMs = 1500, logoSrc }: PreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }

    let minTimeElapsed = false;
    let pageLoaded = document.readyState === "complete";

    const tryFinish = () => {
      if (minTimeElapsed && pageLoaded) {
        setExiting(true);
        window.setTimeout(() => setLoading(false), 700);
      }
    };

    const minTimer = window.setTimeout(() => {
      minTimeElapsed = true;
      tryFinish();
    }, minDurationMs);

    const onLoad = () => {
      pageLoaded = true;
      tryFinish();
    };

    if (!pageLoaded) window.addEventListener("load", onLoad);
    else tryFinish();

    return () => {
      window.clearTimeout(minTimer);
      window.removeEventListener("load", onLoad);
    };
  }, [minDurationMs, prefersReducedMotion]);

  if (!loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#19151C]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Curtain panels — split and slide apart on exit for a more considered reveal than a plain fade */}
          <motion.div
            className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[#19151C]"
            animate={exiting ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[#19151C]"
            animate={exiting ? { x: "100%" } : { x: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />

          <motion.div
            className="relative z-10 flex flex-col items-center"
            animate={exiting ? { opacity: 0, scale: 0.96 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Mark */}
            <div className="relative h-28 w-28 sm:h-32 sm:w-32">
              {logoSrc ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative h-full w-full"
                >
                  <Image src={logoSrc} alt="Agape Academy International" fill className="object-contain" priority />
                </motion.div>
              ) : (
                <motion.svg
                  viewBox="0 0 200 200"
                  className="h-full w-full"
                  animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                  transition={prefersReducedMotion ? undefined : { duration: 18, repeat: Infinity, ease: "linear" }}
                >
                  <g fill="none">
                    {Array.from({ length: NESTED_SQUARES }).map((_, i) => {
                      const size = 150 - i * 32;
                      const offset = (200 - size) / 2;
                      const colors = ["#E12F41", "#8B176F", "#6C0798", "#FAF8F9"];
                      return (
                        <motion.rect
                          key={i}
                          x={offset}
                          y={offset}
                          width={size}
                          height={size}
                          stroke={colors[i % colors.length]}
                          strokeWidth={2.5}
                          transform={`rotate(45 100 100)`}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{
                            pathLength: { duration: 1.1, delay: i * 0.18, ease: "easeInOut" },
                            opacity: { duration: 0.3, delay: i * 0.18 },
                          }}
                        />
                      );
                    })}
                  </g>
                </motion.svg>
              )}
            </div>

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-7 text-center"
            >
              <p className="font-serif text-xl tracking-tight text-white sm:text-2xl">
                Agape Academy
              </p>
              <p className="mt-1 font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-white/50">
                International
              </p>
            </motion.div>

            {/* Progress line */}
            <div className="mt-8 h-px w-32 overflow-hidden bg-white/10 sm:w-40">
              <motion.div
                className="h-full bg-gradient-to-r from-[#E12F41] via-[#8B176F] to-[#6C0798]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: (minDurationMs - 200) / 1000, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
