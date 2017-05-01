var gulp = require('gulp');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
gulp.task('mkapp', function() {
    var argv = require('./argv');
    var app = argv('name');

    var fs = require('fs');
    try {
        var config = require(app);
    }
    catch(e) {
        return console.error('Could not file settings file: ' + app + '.json')
    }
    var settings = require('./settings')(config);

    fs.stat(settings.SRC_APP + '/index.js', function(err, stat) {
        if(err == null) {
            console.error('App ' + settings.config.app + ' already exists');
        } else {
            var replace = require('gulp-replace');
            var batchReplace = require('gulp-batch-replace');
            var replaceConfig = []
            Object.keys(settings.config).forEach(function(k) {
                if (k != 'cache')
                    replaceConfig.push(['{'+k+'}', settings.config[k]])
            })
            gulp.src(settings.getAllFiles(settings.SRC_SAMPLE, '*', 10))
                .pipe(batchReplace(replaceConfig))
                .pipe(gulp.dest(settings.SRC_APP));
            var rename = require('gulp-rename');
            gulp.src(app + '.js')
                .pipe(rename('index.js'))
                .pipe(gulp.dest(settings.SRC_APP_GULP));
        }
        gulp.src(['./gulpfile.js'])
            .pipe(replace(settings.GULP_NEW_APP_TEXT, settings.GULP_NEW_APP_REPLACEMENT))
            .pipe(gulp.dest('.'));
    });
});
