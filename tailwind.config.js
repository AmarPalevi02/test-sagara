/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#FFFFFF',
        secondary: {
         DEFAULT: '#A51535',
         dark: '#9E9E9E'
        },
      },
    },
  },
  plugins: [],
}

