module.exports = exports = function(settings) {
    gulp.task(settings.config.app + ':js', function() {
        var source = require('vinyl-source-stream');
        var buffer = require('vinyl-buffer');
        var browserify = require('browserify');
        var uglify = require('gulp-uglify');
        var gutil = require('gulp-util');
        var sourcemaps = require('gulp-sourcemaps');
        var bundleConfig = {
            entries: [settings.SRC_APP + '/index.js'],
            debug: settings.isDebug(),
            transform: ['babelify'],
        };
        var bundler = browserify(bundleConfig);
        bundler.on('update', doBundle);
        settings.LIBS.forEach(function (libs) {
            libs.forEach(function(lib) {
                bundler.external(lib);
            })
        });
        function doBundle() {
            var bundle = bundler
                .on('error', gutil.log.bind(gutil, 'Browserify Error'))
                .bundle()
                .pipe(source('zzz.js'))
                .pipe(buffer())
            return settings.dest([
              bundle
            ], settings.public_static_app_dirs)
        }
        return doBundle();
    });
}
