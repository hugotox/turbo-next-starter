module.exports = {
  stories: ['../../../(packages|apps)/**/stories/**/*.stories.@(jsx|tsx)'],
  addons: [
    '@chakra-ui/storybook-addon',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        measure: false,
      },
    },
    // '@storybook/addon-interactions',
  ],
  features: {
    emotionAlias: false,
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  refs: {
    '@chakra-ui/react': { disable: true },
  },
  // https://github.com/emotion-js/emotion/issues/1306#issuecomment-920695390
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, '@emotion/babel-preset-css-prop'],
  }),
}
