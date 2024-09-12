/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },

      boxShadow: {
        blueSky: '0px 0px 0px 4px rgba(46, 144, 250, 0.24)',
        error: '0px 0px 0px 4px rgba(240, 68, 56, 0.24)',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: { light: '#3F3F46', DEFAULT: '#1A1A1E', dark: '#131316' },
      white: { light: '#FAFAFA', DEFAULT: '#ffffff', dark: '#E4E4E7' },
      gray: {
        light: '#D1D1D6',
        DEFAULT: '#A0A0AB',
        dark: '#70707B',
        extraDark: '#51525C',
      },
      red: {
        extraLight: '#FDA29B',
        light: '#F97066',
        DEFAULT: '#F04438',
        dark: '#D92D20',
      },
      blue: { DEFAULT: '#84CAFF', dark: '#53B1FD' },
    },
  },
  plugins: [],
};
