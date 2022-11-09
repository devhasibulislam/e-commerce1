/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        ecommercetheme: {
          primary: "#f54962",
          secondary: "#0c315e",
          accent: "#47cb53",
          neutral: "#f6f9fc",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake"
    ],
  },
};
