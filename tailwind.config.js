/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm2: "350px",
      },
      colors: {
        myGreen: "#38826B",
        green2: "#1D4236",
        green3: "#18B583",
        cinza: "#D9D9D9",
        textCinza: "#6F6F6F",
        button: "#606060",
      },
    },
  },
  plugins: [],
};
