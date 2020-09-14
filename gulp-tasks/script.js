const gulp = require('gulp'),
  webpack = require('webpack-stream'),
  webpackConfig = require('../webpack.config.js'),
  eslint = require('gulp-eslint'),
  browsersync = require('browser-sync')

module.exports = function script() {
  return gulp.src('src/js/**/*.js')
    .pipe(webpack(webpackConfig))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulp.dest('build/js'))
    .on('end', browsersync.reload)
}
