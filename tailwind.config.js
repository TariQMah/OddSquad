module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
        Newake: ["newakedemo", "sans-serif"],
        JosefinSans: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        yellowColor: "#FFE39D",
        yellowColor1: "#FBB551",
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
