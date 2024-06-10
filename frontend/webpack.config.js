const path = require('path');

module.exports = {
    resolve: {
        alias: {
        '@mui/styled-engine': '@mui/styled-engine-sc',
        },
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            },
        },
        {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        },
        ],
    },
    entry: './src/index.js',  // エントリーポイントはプロジェクトに合わせて調整してください
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
