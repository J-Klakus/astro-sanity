import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Poppins", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#4B3AB3",
        secondary: "#9FFFF3",
        light: "#6e59ee",
        highlight: "#6F61C2",
        verylight: "#f0f0f9",
      },
      backgroundImage: ({ theme }) => ({
        "text-gradient":
          "linear-gradient(112.79deg, #4B3AB3 62%, #9FFFF3 96.76%)",
      }),
      animation: {
        text: "text 2s ease-in-out infinite",
      },
      keyframes: {
        text: {
          "0%": { backgroundPosition: "left" },
          "50%": { backgroundPosition: "right" },
          "100%": { backgroundPosition: "left" },
        },
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
