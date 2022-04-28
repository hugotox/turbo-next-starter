const withTM = require("next-transpile-modules")(["theme", "ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
