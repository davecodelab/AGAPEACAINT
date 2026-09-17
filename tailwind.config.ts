import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        aai: {
          purple: "#6C0798",
          "deep-purple": "#4B075F",
          red: "#E12F41",
          magenta: "#8B176F",
          warm: "#FAF8F9",
          charcoal: "#19151C",
        },
      },
    },
  },
  plugins: [],
};

export default config;
