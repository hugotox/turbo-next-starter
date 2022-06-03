const withTM = require("next-transpile-modules")([
  "apollo-client",
  "theme", 
  "ui",
  "utils"
]);

module.exports = withTM({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
});
