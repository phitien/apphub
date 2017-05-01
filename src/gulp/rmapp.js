var gulp = require('gulp');
gulp.task('rmapp', function() {
    var argv = require('./argv');
    var app = argv('name');

    if (!app) {
        console.error('Name is missing:--name=')
        return;
    }
    if (app == 'sample') {
        console.error('Name must not be sample')
        return;
    }
    var settings = require('./settings')({app: app});
    var fs = require('fs');
    fs.stat(settings.SRC_APP + '/index.js', function(err, stat) {
        var replace = require('gulp-replace');
        gulp.src(['./gulpfile.js'])
            .pipe(replace(settings.GULP_NEW_APP + "\n", ""))
            .pipe(gulp.dest('.'));
        if(err == null) {
            var clean = require('gulp-clean');
            gulp.src([settings.SRC_APP], {read: false}).pipe(clean())
        }
    });
});
