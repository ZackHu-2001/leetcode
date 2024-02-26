/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-layer-1": "rgb(40, 40, 40)",
        "dark-layer-2": "rgb(26, 26, 26)",
        "dark-label-2": "rgb(239, 241, 246, 0.75)",
        "dark-layer-1": "rgb(40, 40, 40)",
        "dark-layer-1": "rgb(40, 40, 40)",
        "dark-layer-1": "rgb(40, 40, 40)",
        "dark-layer-1": "rgb(40, 40, 40)",
        "dark-layer-1": "rgb(40, 40, 40)",
        "dark-layer-1": "rgb(40, 40, 40)",
        "dark-layer-1": "rgb(40, 40, 40)",
        "dark-layer-1": "rgb(40, 40, 40)",
        "brand-orange": "rgb(255, 161, 22)",
        "dark-orange": "rgb(235, 141, 2)",
      },
    },
  },
  plugins: [],
}