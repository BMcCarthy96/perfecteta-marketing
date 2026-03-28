import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0a1628",
          "navy-soft": "#132337",
          teal: "#0d6b6b",
          "teal-light": "#1a8a8a",
          gold: "#c4a35a",
          "gold-muted": "#b89b4a",
          cream: "#faf8f5",
          sand: "#f2efe8",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(10, 22, 40, 0.08), 0 12px 48px -12px rgba(10, 22, 40, 0.12)",
        "card-hover":
          "0 8px 32px -4px rgba(10, 22, 40, 0.1), 0 20px 56px -16px rgba(10, 22, 40, 0.14)",
        soft: "0 2px 16px rgba(10, 22, 40, 0.06)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
