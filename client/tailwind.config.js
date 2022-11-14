/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

/**
 * Parsing error : Cannot find module 'next/babel'
 * https://stackoverflow.com/questions/68163385/parsing-error-cannot-find-module-next-babel
 */
