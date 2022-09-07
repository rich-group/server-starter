require('@babel/core')
require('@babel/register')({
  presets: ['@babel/preset-env'],
  extensions: [".ts", '.js'],
})
require('./server')