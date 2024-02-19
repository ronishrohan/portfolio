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
        "orange_dim" : "#e64136"
      }
    },
  },
  plugins: [],
};
