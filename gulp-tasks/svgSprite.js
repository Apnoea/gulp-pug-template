const gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  svgstore = require('gulp-svgstore'),
  rename = require('gulp-rename')

module.exports = function svgSprite() {
  return gulp.src('src/images/*.svg')
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
          { removeViewBox: false }
        ]
      })
    ]))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'))
}
