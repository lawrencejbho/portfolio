/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        h1: { raw: "(min-height: 400px)" },
        h2: { raw: "(min-height: 600px)" },
        h3: { raw: "(min-height: 800px)" },
        h4: { raw: "(min-height: 900px)" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
