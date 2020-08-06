const gulp = require('gulp'),
  changed = require('gulp-changed'),
  imagemin = require('gulp-imagemin'),
  imageminPngquant = require('imagemin-pngquant')

module.exports = function imageMinify() {
  return gulp.src('src/images/**/*.{gif,png,jpg,webp}')
    .pipe(changed('build/img'))
    .pipe(imagemin([
      imageminPngquant({ quality: [0.75, 0.75] }),
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true })
    ]))
    .pipe(gulp.dest('build/img'))
}
