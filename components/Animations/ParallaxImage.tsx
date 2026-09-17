
"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
};

export function ParallaxImage({
  src,
  alt,
  className = "",
  intensity = 10,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${intensity}%`, `${intensity}%`]
  );

  const smoothY = useSpring(y, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          y: smoothY,
          scale: 1.15,
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

