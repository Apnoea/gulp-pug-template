const gulp = require('gulp'),
  imageMinify = require('./imageMinify'),
  svgSprite = require('./svgSprite'),
  styles = require('./styles'),
  script = require('./script'),
  pug2html = require('./pug2html'),
  server = require('browser-sync')

module.exports = function serve(cb) {
  server.init({
    server: 'build',
    notify: false,
    cors: true
  })

  gulp.watch('src/images/**/*.{gif,png,jpg,webp}', gulp.parallel(imageMinify))
  gulp.watch('src/images/**/*.svg', gulp.parallel(svgSprite))
  gulp.watch('src/styles/**/*.scss', gulp.parallel(styles))
  gulp.watch('src/js/**/*.js', gulp.parallel(script))
  gulp.watch('src/pages/**/*.pug', gulp.parallel(pug2html))

  return cb()
}
