import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b51f7d",
        secondary: "#01395a",
        text: "#4b5563",
        textDark: "#1f2937",
        textLight: "#556987",
        textLighter: "#9ca3af",
        gray: "#d3d4d6",
        lightGray: "#e9eaeb",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
