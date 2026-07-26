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
      colors: {
        pastel: {
          blue: {
            DEFAULT: '#AEE3F5',
            light: '#DFF4FC',
            dark: '#5FB8D6',
          },
          pink: {
            DEFAULT: '#F8C8DC',
            light: '#FDE7EF',
            dark: '#E88EAF',
          },
          purple: {
            DEFAULT: '#D9C6F0',
            light: '#EFE5FA',
            dark: '#A97FDB',
          },
        },
        ink: '#3B3450',
      },
      backgroundImage: {
        'pastel-hero': 'linear-gradient(135deg, #DFF4FC 0%, #F8C8DC 50%, #D9C6F0 100%)',
        'pastel-soft': 'linear-gradient(180deg, #FDE7EF 0%, #EFE5FA 100%)',
        'pattern': "url('./assets/pattern.svg')",
        'home': "url(./assets/home.svg)",
        'logobg': "url(./assets/logobg.svg)",
        'homebg': "url(./assets/homebg.svg)",
        'aboutwv': "url(./assets/about.svg)",
        'sponbg': "url(./assets/sponbg.svg)",
        'film': "url(./assets/film.svg)",
        'newsbg': "url(./assets/newsletter.svg)",
      },
      boxShadow: {
        'white-glow': '0 0 15px rgba(255, 255, 255, 0.7)',
      },
    },
  },
  plugins: [],
}

