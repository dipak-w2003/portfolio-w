/** @type {import('tailwindcss').Config} */
// import tailwindCssMotion from "tailwindcss-motion";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "480px",
      },
      boxShadow: {
        "custom-inset": "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
      },

      scrollbarWidth: ["none"], // Add support for Firefox
    },
  },
  plugins: [],
};
