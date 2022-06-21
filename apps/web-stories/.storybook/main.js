module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
  ],

  // https://github.com/emotion-js/emotion/issues/1306#issuecomment-920695390
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, '@emotion/babel-preset-css-prop'],
  }),

  features: {
    emotionAlias: false,
  },
  framework: '@storybook/react',

  // https://storybook.js.org/docs/react/sharing/package-composition#set-up
  refs: {
    '@chakra-ui/react': { disable: true },
  },

  stories: ['../../../(packages|apps)/**/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  // https://github.com/storybookjs/storybook/issues/16690#issuecomment-971579785
  webpackFinal: async (config) => {
    config.module.rules.push({
      include: /node_modules/,
      test: /\.mjs$/,
      type: 'javascript/auto',
    })
    return config
  },
}
