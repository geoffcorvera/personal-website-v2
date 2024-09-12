import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
    colors: {
      current: "currentColor",
      white: "#FFF8EC",
      soil: "#261F14",
      cream: "#FFEFD7",
      orange: "#D7890E",
    },
    fontFamily: {
      serif: ['"New Kansas", "serif"', {
        fontFeatureSettings: '"liga"'
      }],
    },
  },
  plugins: [],
};
export default config;
