import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx,svg}",
  ],
  theme: {
    fontFamily: {
      sans: ["Bebasneubold", "Arial", "sans-serif"],
      serif: ["Myriad", "Arial", "sans-serif"],
    },
    screens: {
      xlg: { min: "2220px" }, // min-width 2220px
      lg: { max: "1640px" }, // max-width: 1440px
      xmd: { max: "1280px" }, // max-width: 1280px
      md: { max: "960px" }, // max-width: 960px
      lsm: { max: "768px" }, // max-width: 768px
      sm: { max: "640px" }, // max-width: 640px
    },
    container: {
      screens: {
        max: "1376px",
      },
    },
    fontSize: {},
  },
  plugins: [],
  prefix: "",
} satisfies Config;

export default config;
