module.exports = {
 entry: ['./app.es6'],
 output: {
   filename: 'build/bundle.js'
 },
 module: {
   preLoaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'jshint-loader'

     }
   ],
   loaders: [
     {
       test: [/\.js$/, /\.es6$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['es2015']
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 }
}
