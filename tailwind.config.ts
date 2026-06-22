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
        /* Heaven Indigo (primary) */
        indigo: {
          50: "#ECEEF6",
          100: "#D2D7E8",
          200: "#A0AAC9",
          300: "#6E7BA8",
          400: "#43527E",
          500: "#2A386A",
          600: "#1F2A5C",
          700: "#161E44",
          800: "#0D132C",
          900: "#060A17",
        },
        /* Heart Gold (accent — CTAs) */
        gold: {
          50: "#FBF4E2",
          100: "#F4E2B0",
          200: "#ECCE82",
          300: "#DFB661",
          400: "#D4A24C",
          500: "#B98832",
          600: "#946A22",
          700: "#6E4F18",
          800: "#4A350F",
        },
        /* Coral Hope (alt accent) */
        coral: {
          300: "#ED8A6E",
          500: "#E45A3B",
          700: "#A33A22",
        },
        /* Cream / Linen — backgrounds */
        cream: "#F7F2E7",
        "cream-2": "#F0E9D8",
        paper: "#FCFAF3",
        /* Warm grays */
        warm: {
          100: "#EDE9DF",
          200: "#D7D1C4",
          300: "#A39E92",
          500: "#6B6557",
          700: "#3F3B33",
        },
        /* Earth Charcoal */
        charcoal: "#1A1A1A",
        night: "#0A0F22",
        /* Semantic */
        success: "#3F7D55",
        error: "#A8362A",
        info: "#3F5E8C",
      },
      fontFamily: {
        display: [
          "var(--font-source-serif)",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        body: ["var(--font-ibm-plex)", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "Menlo", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 5.5vw, 5rem)", { lineHeight: "1.05" }],
        h1: ["clamp(2.25rem, 4vw, 3rem)", { lineHeight: "1.1" }],
        h2: ["clamp(1.75rem, 3vw, 2.25rem)", { lineHeight: "1.15" }],
        h3: ["1.5rem", { lineHeight: "1.25" }],
        lead: ["1.375rem", { lineHeight: "1.5" }],
        body: ["1.125rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        eyebrow: ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "1u": "0.5rem",
        "2u": "1rem",
        "3u": "1.5rem",
        "4u": "2rem",
        "5u": "2.5rem",
        "6u": "3rem",
        "8u": "4rem",
        "10u": "5rem",
        "12u": "6rem",
        "16u": "8rem",
      },
      maxWidth: {
        container: "1200px",
        narrow: "720px",
        wide: "1440px",
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
        lg: "8px",
        xl: "14px",
        pill: "999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(26, 26, 26, 0.06)",
        sm: "0 2px 8px rgba(26, 26, 26, 0.08)",
        md: "0 8px 24px rgba(26, 26, 26, 0.10)",
        lg: "0 24px 60px rgba(26, 26, 26, 0.14)",
        focus: "0 0 0 3px rgba(212, 162, 76, 0.4)",
      },
      transitionTimingFunction: {
        "ease-out-custom": "cubic-bezier(0.16, 0.84, 0.44, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
