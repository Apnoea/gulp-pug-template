const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  gulpStylelint = require('gulp-stylelint'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  shorthand = require('gulp-shorthand'),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css'),
  browsersync = require('browser-sync')

module.exports = function styles() {
  return gulp.src('src/styles/layouts/style.scss')
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
      compatibility: '*',
      level: 2,
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('build/css'))
    .pipe(browsersync.stream())
}
