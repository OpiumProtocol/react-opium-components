const path = require('path');

module.exports = {
  stories: [
    '../src/Components/**/*.stories.tsx',
    '../src/**/*.stories.@(tsx|js|mdx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        // actions, backgrounds, controls, docs, viewport, toolbars
        controls: false,
        actions: false,
      }
    },
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      { 
        test: /\.scss$/, 
        use: [ 
          { loader: 'style-loader' },
          { loader: 'css-loader' }, 
          { loader: 'sass-loader' },
        ],
        exclude: path.resolve(__dirname, '../src/Styles/variables.scss')
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../src/Styles/variables.scss'),
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true }  },
          { loader: 'sass-loader',  },
        ]
      }
    );

    return config;
  },
}
