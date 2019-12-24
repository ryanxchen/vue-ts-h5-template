module.exports = {
  plugins: {
    autoprefixer: {},
    // 'postcss-pxtorem': false
    'postcss-pxtorem': {
      // If you modify rootValue, you also need to modify rem in responsive.js
      rootValue: 100, // 1rem=100px
      propWhiteList: []
    }
  }
}
