/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#14151a",
        bgdark: "#0d0e11",
        tabactive: "#f472b6",
        tab: "#3b3f4b",
        code: "#282a36",
        mypink: "#f472b6",
        cardborder: "#282a36",
        cardbghover: "#201525",
        cardborderhover: "#831843",
        darkpill: "#1c1d20",
        // pill: bg-gray-700/60
        // pillhover: bg-gray-700
        // darkpillborder: border-b border-b-gray-700
        // sectiondivider: border-b border-b-gray-700
        // textgray: text-gray-300
        // smalltextlink: text-gray-400
      },
    },
  },
  plugins: [],
};
