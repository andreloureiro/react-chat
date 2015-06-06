var gulp = require('gulp'),
	connect = require('gulp-connect'),
	babelify = require('babelify'),
	browserify = require('browserify'),
	jshint = require('gulp-jshint'),
	jsxhint = require('jsxhint'),
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
		.pipe(jshint())
		.pipe(gulp.dest('./js'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['./js/**/*.jsx'], ['scripts'])
});

gulp.task('default', ['connect', 'scripts', 'watch']);