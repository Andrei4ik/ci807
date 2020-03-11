const path = require("path");
const webpack = require('webpack');
const HtmlWbpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV;

MSFIDOCredentialAssertion.exports = {
    entry: './app/index.js',

    mode: env,

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
        hot: true,
    },

    module: {
        rules:[{
            test: /\.(js|jsx)$/,
            use:'babel-loader'
        },
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
 
        },
        ]
    },

    resolve: {
        extensions: [".tsx",".ts",".js"]
    },

    plugins:  [
        new HtmlWebpackPlugin({template: './app/index.html'}),
        webpack.HotModuleReplacementPlugin(),
    ]
}
