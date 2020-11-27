const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts'
  },
  optimization: {
    minimize: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'react-opium-components',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 65535,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      },
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
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'sass-loader', },
        ]
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  }
}
