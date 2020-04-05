const gulp = require('gulp'),
  svgstore = require('gulp-svgstore'),
  rename = require('gulp-rename')

module.exports = function svgSprite() {
  return gulp.src('src/images/*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'))
}

