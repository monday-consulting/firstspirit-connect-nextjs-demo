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
    },
  },
  plugins: [],
};

export default config;
