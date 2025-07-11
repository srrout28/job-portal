/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/Layouts/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: "#F07621",
        themeColorTwo: "#fff2c5",
        primaryText: "#1F2937",
        secondaryText: "#6B7280",
        linkBlue: "#1D4ED8",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        header: "0 2px 4px rgba(0, 0, 0, 0.05)",
        card: "0 1px 3px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
