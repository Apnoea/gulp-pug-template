const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  pugLinter = require('gulp-pug-linter'),
  pug = require('gulp-pug'),
  cached = require('gulp-cached'),
  dependents = require('gulp-dependents'),
  htmlValidator = require('gulp-w3c-html-validator'),
  browsersync = require('browser-sync')

function pugLint() {
  return gulp.src('src/pages/**/*.pug')
    .pipe(plumber())
    .pipe(cached('pugLintCache'))
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
}

module.exports = function pug2html() {
  pugLint()
  return gulp.src('src/pages/*.pug')
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
    .pipe(pug({ pretty: true }))
    .pipe(htmlValidator())
    .pipe(gulp.dest('build'))
    .pipe(browsersync.stream());
}
