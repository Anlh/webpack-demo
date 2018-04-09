const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
        // base: ['./src/index.js', './src/print.js'] Create a new bundle gathering these 2 scripts
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};