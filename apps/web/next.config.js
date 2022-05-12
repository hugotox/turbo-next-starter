const withTM = require("next-transpile-modules")([
  "apollo-client",
  "theme", 
  "ui"
]);

module.exports = withTM({
  reactStrictMode: true,
});
