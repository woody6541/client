/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        navSlide: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        /* 🔽 MARQUEE KEYFRAME */
        marquee: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },

      animation: {
        "nav-slide": "navSlide 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",

        /* 🔽 MARQUEE ANIMATION */
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
