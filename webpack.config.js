const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isStoryBook = !!process.env.STORYBOOK;

const config = {
  mode: isDev ? 'development' : 'production',
  entry: {
    'skin-react': ['./src/index.ts'],
    'skin-react.min': ['./src/index.ts']
  },
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'skin-react',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.mjs', '.json', '.jsx', '.ts', '.tsx', '.css']
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [require.resolve('ts-loader')]
      },
      {
        test: /\.css$/,
        include: [/node_modules/, /.storybook/, /src/],
        use: [isStoryBook ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: require.resolve('url-loader'),
        options: {
          limit: 2048,
          name: 'assets/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom'
    }
  }
};

module.exports = config;
