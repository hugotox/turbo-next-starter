const withTM = require('next-transpile-modules')([
  'theme',
  'ui',
  'utils',
  'web-apollo',
])

module.exports = withTM({
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  optimizeFonts: false,
})
