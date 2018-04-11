const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
        //base: ['./src/index.js', './src/print.js'] //Create a new bundle gathering these 2 scripts
    },
    devtool: 'inline-source-map', // Generate source maps, allow us to debug the bundles in the browser
    devServer: {
        contentBase: './dist'
    },
    module: {
        // Initialize style module loader to use the HMR feature
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        // Este plugin permite que ao alterarmos as nossas entries,
        // Que crie automaticamente um novo html com as novas dependencias, eliminando as antigas, sem termos que fazer isto
        // manualmente (O problema aqui e como vou integrar isto com os templates de twig html do room presence)
        // A integraçao c/ o symphony nao pode ser feita desta forma, temos que manualmente alterar os caminhos caso as entries sejam alteradas
        // new HtmlWebpackPlugin({
        //     template: 'src/index.html.twig',
        //     filename: 'index.html.twig'
        // })
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: 'src/index.html'
        }),
        // Permite limpar o conteudo do directorio (limpa ficheiros que nao estao a ser usados)
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};