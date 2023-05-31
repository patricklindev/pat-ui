module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions',
   '@storybook/addon-links',
   '@storybook/addon-docs'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', {flow: false, typescript: true}]],
          },
        },
        // already had have built in typescript --
        // {
        //   loader: require.resolve('react-docgen-typescript-loader'),
        //   options: {
        //     shouldExtractLiteralValuesFromEnum: true,
        //     propFilter: (prop, component) => {
        //       if (prop.parent) {
        //         return !prop.parent.fileName.includes('node_modules');
        //       }
        //       return true;
        //     },
        //   },
        // },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
