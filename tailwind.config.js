/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        datacampBlue: "#05192d",
        datacampGreen: "#01ef62",
        datacampGreenLight: "#65ff8f",
        datacampSkyBlue: "#01bdfc",
      },
    },
  },
  plugins: [],
};
