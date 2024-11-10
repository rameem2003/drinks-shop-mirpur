/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1180px",
      },
      colors: {
        primary: "#F9C06A",
        primaryText: "#1E1E1E",
        secondaryText: "#707070",
        title: "#603809",
      },

      fontFamily: {
        script: ["Clicker Script", "cursive"],
        playFair: ["Playfair Display", "serif"],
      },

      backgroundImage: {
        bgScreen:
          "linear-gradient(45deg, rgba(0,0,0, 0.9), rgba(0,0,0, 0.5)), url(/banner.jpg)",
        bgScreenOne:
          "linear-gradient(45deg, rgba(0,0,0, 0.9), rgba(0,0,0, 0.5)), url(/coffeadd.jpg)",
      },
    },
  },
  plugins: [],
};
