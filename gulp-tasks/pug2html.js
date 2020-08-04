const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  pugLinter = require('gulp-pug-linter'),
  filter = require('gulp-filter'),
  pug = require('gulp-pug'),
  cached = require('gulp-cached'),
  dependents = require('gulp-dependents'),
  htmlValidator = require('gulp-w3c-html-validator');

module.exports = function pug2html() {
  return gulp.src('src/pages/**/*.pug')
    .pipe(plumber())
    .pipe(cached('pugCache'))
    .pipe(dependents({
      ".pug": {
        parserSteps: [
          /^\s*(?:extends|include)\s+(.+?)\s*$/gm,
          function (str) {
            var absolute = str.match(/^[\\/]+(.+)/);
            if (absolute) {
              str = path.resolve('src/pages', absolute[1]);
            }
            return [str];
          }
        ],
        postfixes: ['.pug', '.jade']
      }
    }))
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(filter('src/pages/*.pug'))
    .pipe(pug({ pretty: true }))
    .pipe(htmlValidator())
    .pipe(gulp.dest('build'))
}
