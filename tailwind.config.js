/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: ".5rem",
  
    },
    extend: {
      colors: {
        grey: {
          default: "#E1E3E6",
          100: "#697583",
          200: "#A4B0BE",
        },
        dark: {
          default: "#283648",
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      margin: {
        9.5: '38px'
      }
    },
  },
  plugins: [],
};
