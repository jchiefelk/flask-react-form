
 module.exports = {

    context: __dirname + "/js",
    entry: './index.js',

    output: {
          filename: "bundle.js",
          path: "./static",
    },

    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.css$/, loader: 'style!css' }
      ]
    },

    resolve: {
      extensions: ['', '.js', '.jsx','.css'],
    }

};

