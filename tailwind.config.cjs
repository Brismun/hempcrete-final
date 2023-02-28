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
        "contact-form": "url('/src/Photos/contact.png')",
        "logo-contact": "url('/src/Photos/logo-contact.png')",
      },
    },
  },
  plugins: [],
};
