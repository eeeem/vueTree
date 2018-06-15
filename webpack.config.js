const pageList = [
    'index'
];
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const srcPath = './src/';
const outputPath = './html/';
const webpackConfig = {
    devtool: 'eval-source-map',
    entry: {},
    output: {
        path: path.resolve(outputPath),
        filename: 'assets/[name].js?[hash]',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader', 'less-loader', 'postcss-loader'],
                    fallback: 'style-loader'
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|jqeg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: '1024',
                        name: '[name].[ext]',
                        outputPath: 'assets/imgs/'
                    }
                }]
            },
            {
                test: /\.vue/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        extractCSS: true
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-withimg-loader'
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('css/[name].min.css?[hash]'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.min\.css/g,
            cessorOptions: { discardComments: { removeAll: true } }
        })
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};
for (let i = 0; i < pageList.length; i++) {
    const pageName = pageList[i];
    webpackConfig.plugins.push(new htmlWebpackPlugin({
        template: `${srcPath}${pageName}.html`,
        filename: `${pageName}.html`,
        chunks: [pageName]
    }));
    webpackConfig.entry[pageName] = `${srcPath}/js/${pageName}.js`;
}
module.exports = webpackConfig;
