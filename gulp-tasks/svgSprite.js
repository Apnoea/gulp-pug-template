const gulp = require('gulp'),
  svg = require('gulp-svg-sprite')

module.exports = function svgSprite() {
  return gulp.src('src/images/**/*.svg')
    .pipe(svg({
      shape: {
        dest: "svgs"
      },
      mode: {
        stack: {
          sprite: "../sprite.svg"
        }
      }
    }))
    .pipe(gulp.dest('build/img'))
}
