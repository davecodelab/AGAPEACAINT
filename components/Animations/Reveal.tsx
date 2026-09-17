
"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  direction?: "up" | "down" | "left" | "right";
};

const directions = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { y: 0, x: 60 },
  right: { y: 0, x: -60 },
};

export function Reveal({
  children,
  direction = "up",
  ...props
}: RevealProps) {
  const offset = directions[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...offset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

