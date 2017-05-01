module.exports = exports = function(settings) {
    gulp.task(settings.config.app + ':config', function() {
        var replace = require('gulp-replace');
        var rename = require('gulp-rename');
        return gulp.src(settings.SRC + '/core/config-default.js')
            .pipe(replace('{env}', settings.env))
            .pipe(replace('{config}', JSON.stringify(settings.config)))
            .pipe(rename('index.js'))
            .pipe(gulp.dest(settings.SRC_APP_CONFIG, {overwrite: true}));
    });
}
