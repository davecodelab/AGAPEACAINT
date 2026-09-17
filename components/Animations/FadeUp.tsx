
"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type FadeUpProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function FadeUp({
  children,
  delay = 0,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={variants}
      transition={{
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
