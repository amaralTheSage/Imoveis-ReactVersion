/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FFC451",
        "dark-gray": "#4E4E4E",
        "light-gray": "#A6A6A6",
      },
      backgroundImage: {
        hero: ["url('/hero.png')"],
      },
    },
  },
  plugins: [],
};
