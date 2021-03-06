const rucksack = require( 'rucksack-css' );
const webpack  = require( 'webpack' );
const path     = require( 'path' );

module.exports = {
  context: path.join( __dirname, './client' ),
  entry: {
    jsx: './index.js',
    html: './index.html',
    vendor: [
      'axios',
      'ramda',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux'
    ]
  },
  output: {
    path: path.join( __dirname, './static' ),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.scss$/,
        include: /client/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader?sourceMap',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: [ '', '.js' ]
  },
  postcss: [
    rucksack( {
      autoprefixer: true
    } )
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin( 'vendor', 'vendor.bundle.js' ),
    new webpack.DefinePlugin( {
      'process.env': { NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development' ) }
    } )
  ],
  devServer: {
    contentBase: './client',
    hot: true
  }
};
