const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: { ...colors },
    extend: {
      inset: {
        "1/2": "50%",
        full: "100%",
        timeline2P: "50rem",
        timeline3P: "34rem",
        timeline4P: "50rem",
        timeline5P: "50rem",
      },
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
        Newake: ["newakedemo", "sans-serif"],
        JosefinSans: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        yellowColor: "#FFE39D",
        yellowColor1: "#FBB551",
        purpleColor1: "#EDDDF3",
        twitter: "#5CC3E4",
      },
      fontSize: {
        timeLine: "1.20rem",
      },

      opacity: {
        0.3: "0.3",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["even"],
    },
  },
  plugins: [],
};
