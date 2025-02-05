/** @type {import('tailwindcss').Config} */
import tailwindCssMotion from "tailwindcss-motion";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "479px",
        xs: "375px",
      },
      boxShadow: {
        "custom-inset": "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [tailwindCssMotion],
};
