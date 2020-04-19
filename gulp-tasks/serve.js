const gulp = require('gulp'),
  imageMinify = require('./imageMinify'),
  svgSprite = require('./svgSprite'),
  styles = require('./styles'),
  script = require('./script'),
  pug2html = require('./pug2html'),
  server = require('browser-sync').create()

module.exports = function serve(cb) {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true
  })

  gulp.watch('src/images/**/*.{gif,png,jpg,webp}', gulp.series(imageMinify)).on('change', server.reload)
  gulp.watch('src/images/*.svg', gulp.series(svgSprite)).on('change', server.reload)
  gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
  gulp.watch('src/js/**/*.js', gulp.series(script, cb => gulp.src('build/js').pipe(server.stream()).on('end', cb)))
  gulp.watch('src/pages/**/*.pug', gulp.series(pug2html))
  gulp.watch('build/*.html').on('change', server.reload)

  return cb()
}
