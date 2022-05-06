const withTM = require("next-transpile-modules")(["@hugotox/theme", "@hugotox/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
