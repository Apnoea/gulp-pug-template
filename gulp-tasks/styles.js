const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  cached = require('gulp-cached'),
  dependents = require('gulp-dependents'),
  gulpStylelint = require('gulp-stylelint'),
  sassGlob = require('gulp-sass-glob'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css'),
  browsersync = require('browser-sync')

function styleLint() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(plumber())
    .pipe(cached('stylesCache'))
    .pipe(dependents())
    .pipe(gulpStylelint({
      failAfterError: false,
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }))
}

module.exports = function styles() {
  styleLint()
  return gulp.src('src/styles/layouts/style.scss')
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false,
      grid: true
    }))
    .pipe(cleanCSS({
      compatibility: '*',
      level: 2,
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('build/css'))
    .pipe(browsersync.stream())
}
