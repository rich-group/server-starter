require('module-alias/register');
require('@babel/core')
require('@babel/register')({
  presets: ['@babel/preset-env'],
  extensions: [".ts", '.js'],
})
require('./server')
process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});