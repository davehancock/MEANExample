var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function () {
    gulp.src(['public/app.js', 'public/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'));
});

gulp.task('html', function () {
    gulp.src(['public/**/*.html'])
        .pipe(gulp.dest('assets'));
});

gulp.task('images', function () {
    gulp.src(['public/images/*.*'])
        .pipe(gulp.dest('assets'))
});

gulp.task('watch:js', ['js'], function () {
    gulp.watch('public/**/*.js', ['js']);
});

gulp.task('watch:html', ['html'], function () {
    gulp.watch('public/**/*.html', ['html']);
});