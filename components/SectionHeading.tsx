import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();
  const isCenter = align === "center";
  const textColor = tone === "dark" ? "text-white" : "text-[#19151C]";
  const subColor = tone === "dark" ? "text-white/70" : "text-[#19151C]/65";

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`font-sans text-sm font-medium ${
            tone === "dark" ? "text-[#E9C7DE]" : "text-[#E12F41]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-serif text-3xl leading-[1.12] sm:text-4xl lg:text-5xl ${textColor}`}
      >
        {heading}
      </h2>
      {description && (
        <p className={`mt-4 font-sans text-base leading-relaxed sm:text-lg ${subColor}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
