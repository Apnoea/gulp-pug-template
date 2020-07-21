const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  pugLinter = require('gulp-pug-linter'),
  filter = require('gulp-filter'),
  pug = require('gulp-pug'),
  htmlValidator = require('gulp-w3c-html-validator')

module.exports = function pug2html() {
  return gulp.src('src/pages/**/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(filter('src/pages/*.pug'))
    .pipe(pug({ pretty: true }))
    .pipe(htmlValidator())
    .pipe(gulp.dest('build'))
}
