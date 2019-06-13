const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'src/index.html',
      hash: true
    }),
    new HtmlWebpackPlugin({  
      filename: 'contactar.html',
      template: 'src/contacto.html',
      hash: true
    }),
  ],
}