const gulp = require('gulp'),
  webpack = require('webpack-stream'),
  webpackConfig = require('../webpack.config.js'),
  eslint = require('gulp-eslint'),
  rename = require('gulp-rename')

module.exports = function script() {
  return gulp.src('src/js/**/*.js')
    .pipe(webpack(webpackConfig))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(rename('scripts.js'))
    .pipe(gulp.dest('build/js'))
}
