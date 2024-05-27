import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#4B3AB3",
        secondary: "#9FFFF3",
        light: "#6e59ee",
        highlight: "#6F61C2",
        verylight: "#f0f0f9",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".gradientText": {
          padding: theme("spacing.4"),
          margin: "auto",
        },
      });
    },
  ],
};
