import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b51f7d",
        secondary: "#01395a",
        text: "#4b5563",
        textLight: "#9ca3af",
        lightGray: "#e9eaeb",
      },
    },
  },
  plugins: [],
};

export default config;
