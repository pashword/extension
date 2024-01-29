/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        bg: "bg 50s infinite ease",
      },
      keyframes: {
        bg: {
          "0%": {
            backgroundPosition: "0%",
          },
          "50%": {
            backgroundPosition: "100%",
          },
          "100%": {
            backgroundPosition: "0%",
          },
        },
      },
    },
  },
  plugins: [],
};
