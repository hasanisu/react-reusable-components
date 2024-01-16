/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-color": "linear-gradient (50deg, #0891b2, #134e4a)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
