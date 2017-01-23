var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var concat = require('gulp-concat');

gulp.task("scss", function () {
	return gulp.src("./scss/styles.scss")
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(sass())
	.pipe(gulp.dest("./css"));
});

gulp.task("js", function () {
	return gulp.src([
		'./js/router.js',
		'./js/**/*.js',
		'!./js/all.min.js'
	])
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(concat('all.min.js'))	
	.pipe(gulp.dest("./js"));
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['scss']);
	gulp.watch('./js/**/*.js', ['js']);
});