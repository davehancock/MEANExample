var gulp = require('gulp');
var fs = require('fs');

// TODO Understand how this works / see if there's a more intuitive solution
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
    require('./gulp/' + task);
});

gulp.task('dev', ['watch:js', 'watch:css', 'watch:html', 'dev:server']);

gulp.task('build', ['css', 'js', 'html']);

// Set the default task to be "build" for now.
gulp.task('default', ['build']);


