const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpe?g|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[contenthash].[ext]',
                    outputPath: 'assets'
                }
            },
            {
                test: /\.(png|jpe?g|svg)$/,
                loader: 'image-webpack-loader',
                options: {
                    bypassOnDebug: true,
                    optimizationLevel: 7
                }
            }
        ]
    },
    resolve: {
      extensions: ['.js','.jsx','.ts','.tsx','.css']
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.join(__dirname, 'public', 'index.html')}),
        new ReactRefreshPlugin()
    ],
    performance: {
        hints: false
    }
}