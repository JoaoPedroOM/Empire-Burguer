/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerMenuMobile: 'url(./src/assets/imgs/banner-menu-mobile.png)',
        bannerMenuWeb: 'url(./src/assets/imgs/banner-menu.png)',
      },
      animation: {
        up: "slideUp 0.3s ease-in-out",
        down: "slideDown 0.3s ease-in-out",
      },
      keyframes: {
        slideUp: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        slideDown: {
          "from": {
            transform: "translateY(0)",
          },
          "to": {
            transform: "translateY(100%)",
          },
        },
      },
    },
    fontFamily: {
      lilita: ["Lilita One"],
      Lato: ["Lato"],
    },
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      supm: { max: "359px" },
    },
  },
  plugins: [],
}

