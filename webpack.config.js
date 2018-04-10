const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print2: './src/print.js'
        //base: ['./src/index.js', './src/print.js'] //Create a new bundle gathering these 2 scripts
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
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};