const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname,'src/main.js'),
        background: path.resolve(__dirname,'src/background.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname,'src/manifest.json'),
                    to: path.resolve(__dirname, 'dist/manifest.json')
                },
            ]
        })
    ],
    devServer: {
        port: 13089,
        open: true,
    }
};