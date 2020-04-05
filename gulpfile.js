const gulp = require('gulp'),
  pug2html = require('./gulp-tasks/pug2html'),
  styles = require('./gulp-tasks/styles'),
  script = require('./gulp-tasks/script'),
  fonts = require('./gulp-tasks/fonts'),
  imageMinify = require('./gulp-tasks/imageMinify'),
  svgSprite = require('./gulp-tasks/svgSprite'),
  clean = require('./gulp-tasks/clean'),
  serve = require('./gulp-tasks/serve')

const dev = gulp.parallel(pug2html, styles, script, fonts, imageMinify, svgSprite)

const build = gulp.series(clean, dev)

module.exports.start = gulp.series(build, serve)
module.exports.build = build
