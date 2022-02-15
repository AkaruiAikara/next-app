module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'blood': '#bd0707',
        'pinky': '#f6dada',
        'smooth': 'rgba(224, 200, 200, 0.25)',
        'maroon': 'rgba(151, 74, 74, 1)',
      },
    },
    fontFamily: {
      'sans': ['Avenir', 'sans-serif'],
      'noto': ['Noto Sans', 'serif'],
      'product': ['Product Sans', 'sans-serif'],
      'inter': ['Inter', 'serif'],
    },
  },
  plugins: [],
  darkMode: 'class',
}
