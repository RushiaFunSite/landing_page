module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#77d2b8',
        primaryFont: '#10B981',
        primaryFontHover: '#13eba3',
        primaryItem: '#34D399',
        primaryItemHover: '#3df5b2',
        secondary: '#efdceb',
      },
      fontFamily: {
        comfortaa: ['Comfortaa'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
