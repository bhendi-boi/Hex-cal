/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // background
        background: "#f3f4f6",
        darkBackground: "#1f1f1f",

        // text
        text: "#1f2937", // ? gray-800
        darkText: "#e5e7eb", // ? gray-200

        // header
        headerBackground: "#ffffff", // ? white
        darkHeaderBackground: "#0a0a0a",

        // headings
        headingText: "#030712", // ? gray-950
        darkHeadingText: "#f9fafb", // ? gray-50

        // sub-headings
        subheadingText: "#111827", // ? gray-900
        darkSubheadingText: "#f3f4f6", // ? gray-100

        highlight: "rgb(60,64,67,.3)",
        disabled: "#e5e7eb",
      },
      gap: {
        0.5: "0.125rem",
      },
    },
  },
  plugins: [],
};
