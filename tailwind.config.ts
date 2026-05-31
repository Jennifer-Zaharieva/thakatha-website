import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Plus Jakarta Sans is injected as a CSS variable in app/layout.tsx
        sans: ["var(--font-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        bone: "#F6F2EA",
        paper: "#FBF8F2",
        ink: "#1A1712",
        "ink-soft": "#4A453C",
        "ink-faint": "#8A8275",
        line: "#E4DCCD",
        clay: "#9C5B3B",
        "clay-deep": "#7C4429",
      },
      letterSpacing: {
        label: "0.22em",
        wide2: "0.32em",
      },
      maxWidth: {
        prose2: "62ch",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
