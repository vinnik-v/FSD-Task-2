let path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            { 
                test: /\.pug$/,
                use: ['pug-loader']
              },
            // {
            //   test: /\.css$/,
            //   use: [
            //     { 
            //         loader: MiniCssExtractPlugin.loader,
            //     },
            //     'css-loader',
            //   ],
            // },
            {
              test: /\.s(a|c)ss$/,
              loader: [
                'style-loader',
                { 
                   loader: MiniCssExtractPlugin.loader,
                 },
                'css-loader',
                {
                  loader: 'sass-loader',
                }
              ]
            }
          ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.pug',
            inject: false
        })
      ],
    //devtool: 'eval-sourcemap'
};

module.exports = conf;


