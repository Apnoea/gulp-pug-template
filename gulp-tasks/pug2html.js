const gulp = require('gulp'),
  once = require('gulp-once'),
  plumber = require('gulp-plumber'),
  pugLinter = require('gulp-pug-linter'),
  pug = require('gulp-pug'),
  htmlValidator = require('gulp-w3c-html-validator')

module.exports = function pug2html() {
  return gulp.src('src/pages/*.pug')
    .pipe(once())
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug({ pretty: true }))
    .pipe(htmlValidator())
    .pipe(gulp.dest('build'))
}
