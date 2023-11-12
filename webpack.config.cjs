const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;
// const HashOutput = require('webpack-plugin-hash-output');

module.exports = {
  // mode: 'development',
  // uniqueName: 'chat-app-client',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    // static: {
    //   directory: path.resolve(__dirname, 'dist'),
    // },
    // https://stackoverflow.com/questions/70178726/webpack-manifest-json-not-found
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
      {
        directory: path.join(__dirname, 'public'),
      },
    ],
    open: true,
    port: 6110,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'chat',
      filename: 'remoteEntry.js',
      exposes: {
        './ChatApp': './src/App.js',
        // './ChatApp': './src/components/ChatApp/ChatApp.jsx',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: './public/index.html',
      // filename: 'index.html',
      manifest: './public/manifest.json',
    }),
    // new HashOutput(),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults',
                  },
                ],

                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'],
        // ?name=[name].[ext] is only necessary to preserve the original file name
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
    },
    // minimize: true,
    // // moduleIds: true,
    // // chunkIds: true,
    // removeAvailableModules: true,
    // flagIncludedChunks: true,
    // // occurrenceOrder: false,
    // usedExports: true,
    // concatenateModules: true,
    // sideEffects: false,
  },
};
