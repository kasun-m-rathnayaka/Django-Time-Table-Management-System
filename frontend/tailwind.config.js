/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,j,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#333",
          white: "#d9d9d9",
          red: "#d9d9d9",
          brown: "#322d29",
        },
      },
      fontFamily: {
        title: ["Poppins", "sans-serif"],
      },
    },
    plugins: [],
  },
};
