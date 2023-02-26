/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headF: ["Ubuntu", "Serif"],
        paraF: ["Open Sans", "Serif"],
      },
      screens: {
        gg: "700px",
      },
    },
  },
  plugins: [],
};
