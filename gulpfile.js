var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: "./",
		},
		host: "0.0.0.0",
		port: 8000
	});

	gulp.watch("*").on('change', browserSync.reload);
}); 

gulp.task('sass', function() {
	gulp.src('assets/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('assets/css/'))
		.pipe(browserSync.stream());
});

//Watch task
gulp.task('default', ['serve', 'sass'], function() {
	gulp.watch('assets/scss/**/*.scss', ['sass']);
});
