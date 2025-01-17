/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MerriWeather: ["Merriweather", "serif"],
        Raleway: ["Raleway", "sans - serif"],
      },
    },
  },
  plugins: [],
};
