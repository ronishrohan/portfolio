/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange_main" : "#e64136",
        "orange_dim" : "#e64136",
        "orange_grid" : "hsla(11.76, 100%, 50%, 0.1)",
        "background" : "rgb(3, 7, 19)"
      }
    },
  },
  plugins: [],
};
