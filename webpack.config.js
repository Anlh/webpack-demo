const path = require('path');

module.exports = {
    mode: 'production', // Determine what what environment the project is and to do with the bundled files
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};