const gulp = require('gulp'),
  changed = require('gulp-changed'),
  imagemin = require('gulp-imagemin')

module.exports = function imageMinify() {
  return gulp.src('src/images/**/*.{gif,png,jpg,webp}')
    .pipe(changed('build/img'))
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({ optimizationLevel: 5 }),
    ]))
    .pipe(gulp.dest('build/img'))
}
