/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fond': '#111111',
        'fond-light': '#1A1A1A',
        'texte': '#F3F4F6',
        'texte-muted': '#9CA3AF',
        'cuivre': '#C87941',
        'cuivre-light': '#E0955F',
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
