import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — Deep Teal (was navy). Kept the same token name ("navy")
        // so every existing component (About, MissionVision, Departments,
        // Contact, page backgrounds, etc.) picks up the new palette
        // automatically with zero further edits.
        navy: {
          DEFAULT: "#0F766E", // Deep Teal — primary brand color
          2: "#115E59",       // Dark Teal — hover / pressed states
          3: "#14B8A6",       // Light Teal — gradient highlight accent
        },
        // Secondary — Emerald
        green: {
          DEFAULT: "#16A34A",
          dark: "#15803D",
        },
        // Accent / CTA — Warm Amber
        amber: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
        },
        paper: "#F8FAF9",   // Warm White background
        mist: "#DDEAE6",    // Soft green-gray border
        ink: "#17302E",     // Deep Charcoal Teal (main text)
        slate: "#64748B",   // Muted text
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
        fadeDown: {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        sweep: "sweep 5s cubic-bezier(.65,0,.35,1) infinite",
        fadeUp: "fadeUp .7s ease both",
        fadeDown: "fadeDown .25s ease both",
        fadeIn: "fadeIn .25s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
