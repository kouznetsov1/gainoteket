/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wave: "wave 2s ease-in-out infinite",
      },
      colors: {
        primary: "#15803d",
        secondary: "#22c55e",
        tertiary: "#86efac",
      },
      keyframes: {
        wave: {
          "to, from": { transform: "translate(-50%, 0%)" },
          "50%": { transform: "translate(-50%, -20%)" },
        },
      },
    },
    plugins: [],
  },
};
