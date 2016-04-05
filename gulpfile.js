var gulp = require('gulp');
gulp.task('default', function() {
  gulp.src('./calc-math/*.JPG')
    .pipe(require('gulp-image-resize')({
      width : 1296,
      height : 968,
      imageMagick: true,
      crop : true,
      upscale : false
    }))
  .pipe(require('gulp-imagemin')({progressive: true}))
  .pipe(gulp.dest('books'))
});
