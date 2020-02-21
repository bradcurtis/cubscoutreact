var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {
    mode: 'development',
    entry:  path.resolve(__dirname,'src'),
    output:{
      path: path.resolve(__dirname,'dist'),
      filename: 'bundle.js',
      publicPath:'/'

    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: __dirname + '/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:8080/dist/index.html'
        })
    }
}