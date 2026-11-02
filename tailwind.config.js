/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#EAE0CA',
          base: '#EAE0CA',
          raised: '#F2E9D7',
          secondary: '#DCD0B9',
        },
        ink: {
          DEFAULT: '#292824',
          primary: '#292824',
          secondary: '#625B50',
          muted: '#918675',
        },
        grid: {
          line: '#B9AD98',
        },
        official: {
          red: '#AD4032',
          darkRed: '#843329',
        },
        treasury: {
          dark: '#302B26',
        }
      },
      fontFamily: {
        slab: ['"Roboto Slab"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        'content': '1280px',
      },
      borderRadius: {
        'gov': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
}
