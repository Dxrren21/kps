/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Add your preferred font
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      backgroundImage: {
        'pattern': "url('./assets/pattern.svg')",
        'home': "url(./assets/home.svg)",
        'logobg': "url(./assets/logobg.svg)",
        'homebg': "url(./assets/homebg.svg)",
        'aboutwv': "url(./assets/about.svg)"
      },
      boxShadow: {
        'white-glow': '0 0 15px rgba(255, 255, 255, 0.7)',
      },
    },
  },
  plugins: [],
}

