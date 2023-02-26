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
        gg: "836px",
      },
      backgroundImage: {
        "about-us": "url('/src/Photos/aboutusPhoto.png')",
      },
    },
  },
  plugins: [],
};
