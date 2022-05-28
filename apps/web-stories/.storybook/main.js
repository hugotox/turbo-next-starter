const path = require('path')
const toPath = _path => path.join(process.cwd(), _path)

module.exports = {
  stories: [
    "../../../(packages|apps)/**/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon"
  ],
  features: {
    emotionAlias: false,
  },
  framework: "@storybook/react",

  // https://github.com/emotion-js/emotion/issues/1306#issuecomment-920695390
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, '@emotion/babel-preset-css-prop'],
  }),

  // https://github.com/storybookjs/storybook/issues/16690#issuecomment-971579785
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    })
    return config
  }
};
