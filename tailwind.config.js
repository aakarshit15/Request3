/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.38rem"
      },
      fontFamily: {
        MarvelFont: ["MarvelFont", "sans-serif"],
        KronaOne: ["Krona One", "sans-serif"],
        Inter: ["Inter", "sans-serif"]
      },
      screens: {
        'xs': '440px'
      }
    },
  },
  plugins: [

  ],
}

