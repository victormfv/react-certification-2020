module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        calc10: 'calc(10px + 2vmin)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        cyan: {
          250: '#61dafb',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
