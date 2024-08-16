import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["DmSans", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        navbar: "1px 1px 10px 2px #0000001A",
      },
      backgroundImage: {
        'gradient-radial': 'linear-gradient(180deg, #7C238C -68.75%, rgba(124, 35, 140, 0) 100%)'
      }
    },
  },
  plugins: [],
};
