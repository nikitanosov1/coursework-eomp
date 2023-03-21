/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      dropShadow: {
        cupcake: "2px 8px 16px rgba(194, 198, 208, 0.06)",
      },
      colors: {
        orangeMain: "#FE5F1E",

        // clickBait section
        clickBaitWhite: "#F2F6FA",
        clickBaitGray: "#2E363E",

        greenishBlue: "#081130",

        brightRed: "hsl(12, 88%, 59%)",
        purpleLogo: "hsl(294,97%,38.6%)",
        pea: "#9c6b30",
        latte: "#8F6331",
        coffee: "#5C3825",
        dust: "#C7AA92",
        milk: "#fdfff5",
        // for dark theme
        "darkNight-1": "#000000",
        "darkNight-2": "#0B0718",
        "darkNight-3": "#180021",
        darkPurpleDark: "#160150",
        darkPurple: "#400072",
        darkPurpleBright: "#600095",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        abel: ["Abel", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
