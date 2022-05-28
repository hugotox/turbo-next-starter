const withTM = require("next-transpile-modules")([
  "apollo-client",
  "theme", 
  "ui"
]);

module.exports = withTM({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
});
