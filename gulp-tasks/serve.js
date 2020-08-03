const gulp = require('gulp'),
  imageMinify = require('./imageMinify'),
  svgSprite = require('./svgSprite'),
  styles = require('./styles'),
  script = require('./script'),
  pug2html = require('./pug2html'),
  server = require('browser-sync').create()

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
  server.init({
    server: 'build',
    notify: false,
    cors: true
  })

  gulp.watch('src/images/**/*.{gif,png,jpg,webp}', gulp.series(imageMinify)).on('end', server.reload)
  gulp.watch('src/images/**/*.svg', gulp.series(svgSprite)).on('end', server.reload)
  gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
  gulp.watch('src/js/**/*.js', gulp.series(script, cb => gulp.src('build/js').pipe(server.stream()).on('end', cb)))
  gulp.watch('src/pages/**/*.pug', gulp.series(pug2html, readyReload))

  return cb()
}
