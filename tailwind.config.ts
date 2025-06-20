import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
        xl: "1100px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
      },
    },
    extend: {
      fontFamily: {
        sporting: ['"Sporting Grotesque"', "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#C5FF41",
          light: "#C5FFEE",
        },
        secondary: {
          DEFAULT: "#000000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
