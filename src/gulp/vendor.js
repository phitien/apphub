module.exports = exports = function(config) {
  var gulp = require('gulp');
  var settings = require('./settings')(config);
  gulp.task(settings.NAME + ':vendor', function() {
    var source = require('vinyl-source-stream');
    var buffer = require('vinyl-buffer');
    var browserify = require('browserify');
    var uglify = require('gulp-uglify');

    settings.LIBS.forEach(function (libs, i) {
        var bundler = browserify({
            debug: settings.isDebug(),
            transform: ['babelify'],
        })
        libs.forEach(function(lib) {
            bundler.require(lib);
        })
        settings.dest([
            bundler.bundle()
            .pipe(source('zzz-lib-' + i + '.js'))
            .pipe(buffer())
            .pipe(uglify())
        ], settings.public_static_app_dirs)
    });
  });
}
