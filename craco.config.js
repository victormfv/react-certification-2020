/* eslint global-require: 0 */

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    }
  }
};
