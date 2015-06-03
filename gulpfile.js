var gulp = require('gulp'),
	connect = require('gulp-connect'),
	browserify = require('browserify'),
	reactify = require('reactify'),
	source = require('vinyl-source-stream');

gulp.task('connect', function () {
	connect.server({
		root: '',
		livereload: true
	})
});

gulp.task('scripts', function () {
	browserify(['./js/ChatApp.jsx'])
		.transform(reactify)
		.bundle()
		.pipe(source('ChatApp.js'))
		.pipe(gulp.dest('./js'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['./js/**/*.jsx'], ['scripts'])
});

gulp.task('default', ['connect', 'scripts', 'watch']);