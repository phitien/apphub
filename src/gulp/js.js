module.exports = exports = function(config) {
  var gulp = require('gulp');
  var settings = require('./settings')(config);
  gulp.task(settings.NAME + ':js', function() {
    var source = require('vinyl-source-stream');
    var buffer = require('vinyl-buffer');
    var browserify = require('browserify');
    var babelify = require('babelify');
    var assign = require('object-assign');
    // var gutil = require('gulp-util');
    // var sourcemaps = require('gulp-sourcemaps');
    var bundleConfig = {
        entries: [settings.SRC_APP + '/index.jsx'],
        extensions: ['.jsx'],
        debug: true,
        fullPaths: true,
        noBundleExternal: true,
        transform: [babelify],
    };
    var bundler = browserify(bundleConfig);
    bundler.on('update', doBundle);
    settings.VENDOR_LIBS.forEach(function (lib) {
        bundler.external(lib);
    });
    function doBundle() {
        var bundle = bundler
            // .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .bundle()
            .pipe(source('zzz.js'))
            .pipe(buffer())
            // .pipe(sourcemaps.init())
            // .pipe(sourcemaps.write('./'))
        return settings.dest([
          bundle
        ], settings.public_static_app_dirs)
    }
    return doBundle();
  });
}
