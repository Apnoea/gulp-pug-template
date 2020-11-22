const gulp = require('gulp'),
  webpack = require('webpack-stream'),
  webpackConfig = require('../webpack.config.js'),
  eslint = require('gulp-eslint7'),
  browsersync = require('browser-sync')

module.exports = function script() {
  return gulp.src('src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/js'))
    .on('end', browsersync.reload)
}
