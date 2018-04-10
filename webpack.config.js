const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print2: './src/print.js'
        // base: ['./src/index.js', './src/print.js'] //Create a new bundle gathering these 2 scripts
    },
    plugins: [
        // Este plugin permite que ao alterarmos as nossas entries,
        // Que crie automaticamente um novo html com as novas dependencias, eliminando as antigas, sem termos que fazer isto
        // manualmente (O problema aqui e como vou integrar isto com os templates de twig html do room presence)
        // new HtmlWebpackPlugin({
        //     template: 'src/index.html.twig',
        //     filename: 'index.html.twig'
        // })
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};