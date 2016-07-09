var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');
 
gulp.task('serve', function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('sass', function() {
	gulp.src('assets/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('assets/css/'));
});

//Watch task
gulp.task('default', ['serve', 'sass'], function() {
	gulp.watch('assets/scss/**/*.scss', ['sass']);
});
