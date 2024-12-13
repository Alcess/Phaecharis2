/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primarybg: '#F9F9F9',

        white: 'FFFFFF',

        grey: 'D9D9D9',

        black: '1E1E1E',

        orange: {
          chosen: 'F97B07',
          notchosen: 'F97B07',
          orangeApply: 'FF6B2C',
        },
      },
      fontFamily: {
        sansBold: ["DMSans-Bold", "sans-serif"],
        sansRegular: ["DMSans-Regular", "sans-serif"],
        sansLight: ["DMSans-Light", "sans-serif"],
        sansMedium: ["DMSans-Medium", "sans-serif"],
        sansThin: ["DMSans-Thin", "sans-serif"],
        sanssemibold: ["DMSans-SemiBold", "sans-serif"],
      },

      fontSize: {
        xs: "11px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
      },

      borderWidth: {
        one: "1px",
      }



    },
  },
  plugins: [],
}

