const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { ESBuildMinifyPlugin } = require("esbuild-loader");

const port = 3000;

module.exports = {
    mode: 'development',
    entry: [
        'babel-polyfill',
        './src/index.tsx'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'app.js',
        publicPath: '',
    },
    resolve: {
        alias: {
            'components/*': __dirname + '/src/components/*',
            'react-dom': '@hot-loader/react-dom',
            "Bases": __dirname + '/src/components/base/index.ts',
            'Actions': __dirname + '/src/redux/actions/index.ts',
            'Vars': __dirname + '/src/assets/vars.scss',
            'Templates': __dirname + '/src/components/templates/index.ts',
            'Pages': __dirname + '/src/components/pages/',
            'Atoms': __dirname + '/src/components/UI/atoms/index.ts',
            'Molecules': __dirname + '/src/components/UI/molecules/index.ts',
            'Organisms': __dirname + '/src/components/UI/organisms/index.ts',
            'Hoc': __dirname + '/src/components/HOC/index.ts',
            'Utils': __dirname + '/src/utils/index.ts',
            'StyleVars': __dirname + "/../src/assets/GlobalStyles.tsx",
        },
        extensions: ['.ts', '.js', '.jsx', '.tsx', '.scss'],
    },
    module: {
        rules: [
            { // BABEL & TS LOADER
                test: /\.(ts|tsx|js|jsx)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            // {
            //     enforce: "pre",
            //     test: /\.(ts|tsx|js|jsx)$/,
            //     loader: "source-map-loader"
            // },
            { // CSS LOADER
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            { // URL LOADER
                // test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)?$/,
                loader: 'url-loader',
                options: {
                    name: 'src/[name].[ext]',
                    fallback: 'file-loader',
                    limit: 10000,
                },
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'app.css'
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
        new ForkTsCheckerWebpackPlugin({}),
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
};