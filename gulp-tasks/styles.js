const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  gulpStylelint = require('gulp-stylelint'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  shorthand = require('gulp-shorthand'),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css')

module.exports = function styles() {
  return gulp.src('src/styles/*.scss')
    .pipe(plumber())
    .pipe(gulpStylelint({
      failAfterError: false,
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }))
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false,
      grid: true
    }))
    // .pipe(shorthand())
    .pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/css'))
}
