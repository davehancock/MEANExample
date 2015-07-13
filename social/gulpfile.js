var gulp = require('gulp');
var fs = require('fs');

// TODO Understand how this works / see if there's a more intuitive solution
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
    require('./gulp/' + task);
})

gulp.task('build', ['css', 'js', 'html']);

gulp.task('dev', ['watch:js', 'watch:css', 'dev:server']);

