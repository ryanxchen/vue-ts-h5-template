module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: '@insaic/neon',
        libraryDirectory: 'src/components'
      }
    ]
  ]
}
