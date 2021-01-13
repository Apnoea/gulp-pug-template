const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  cached = require('gulp-cached'),
  dependents = require('gulp-dependents'),
  gulpStylelint = require('gulp-stylelint'),
  filter = require('gulp-filter'),
  sassGlob = require('gulp-sass-glob'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css'),
  browsersync = require('browser-sync')

module.exports = function styles() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(plumber())
    .pipe(cached('stylesCache'))
    .pipe(dependents())
    .pipe(gulpStylelint({
      failAfterError: false,
      reporters: [ { formatter: 'string', console: true } ]
    }))
    .pipe(filter('src/styles/layouts/style.scss'))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer({ cascade: false, grid: true }))
    .pipe(cleanCSS({ compatibility: '*', level: 2 }))
    .pipe(rename({ dirname: 'css', suffix: '.min' }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('build'))
    .pipe(browsersync.stream())
}
