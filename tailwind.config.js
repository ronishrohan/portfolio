/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange_main" : "rgba(255,40,0)",
        "orange_dim" : "rgb(255, 70, 53)",
        "orange_hover" : "rgba(255,250,250)",
        "orange_grid" : "hsla(11.76, 100%, 50%, 0.1)",
        "background" : "rgb(3, 7, 19)"
      }
    },
  },
  plugins: [],
};
