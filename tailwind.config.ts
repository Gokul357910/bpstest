import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E2A47",
          2: "#123457",
          3: "#183F66",
        },
        green: {
          DEFAULT: "#2F9E6E",
          dark: "#227755",
        },
        amber: {
          DEFAULT: "#E8963C",
          dark: "#CD7C28",
        },
        paper: "#F5F7F6",
        mist: "#E4E9E7",
        ink: "#16232E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      keyframes: {
        sweep: {
          "0%": { transform: "rotate(0deg)" },
          "45%": { transform: "rotate(-140deg)" },
          "55%": { transform: "rotate(-140deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        sweep: "sweep 5s cubic-bezier(.65,0,.35,1) infinite",
        fadeUp: "fadeUp .7s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
