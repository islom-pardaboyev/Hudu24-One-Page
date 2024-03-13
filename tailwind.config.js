/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
  
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
          100: '#171717'
        },
        blue:{
          DEFAULT: '#2185F8'
        },
        red: {
          DEFAULT: '#DD33330A',
          100: '#DD333314'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      margin: {
        9.5: '38px'
      },
      spacing: {
        4.5: '16px'
      }
    },
  },
  plugins: [],
};
