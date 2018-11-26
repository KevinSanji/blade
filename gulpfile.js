var gulp = require('gulp');
var sass = require('gulp-sass');

var sassFiles = 'src/*scss',
    cssDest = 'dist/';

gulp.task('watch', function() {
  gulp.watch(sassFiles, gulp.series('styles'));
})

gulp.task('styles', function() {
  return gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

gulp.task('default', gulp.series('styles', 'watch'));
