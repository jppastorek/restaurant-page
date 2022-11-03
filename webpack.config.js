const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        menu: './src/menu.js',
        header: './src/header.js',
        home: './src/home.js',
        contact: './src/contact.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};