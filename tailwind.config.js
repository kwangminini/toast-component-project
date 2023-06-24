/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "toast-bg": "#ffffff",
        "toast-success-bg": "#1e8ffa",
      },
    },
  },
  plugins: [],
};
