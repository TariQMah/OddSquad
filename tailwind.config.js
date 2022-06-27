module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      spacing: {
        "5px": "5px",
      },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
        Newake: ["newakedemo", "sans-serif"],
        JosefinSans: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        yellowColor: "#FFE39D",
        xzy: "#FBB551",
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

  plugins: [],
};
