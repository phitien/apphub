module.exports = exports = function(config) {
  var gulp = require('gulp');
  var settings = require('./settings')(config);
  gulp.task(settings.NAME + ':vendor', function() {
    var source = require('vinyl-source-stream');
    var buffer = require('vinyl-buffer');
    var uglify = require('gulp-uglify');
    var browserify = require('browserify');
    var bundle = browserify({
        debug: false,
    });
    settings.VENDOR_LIBS.forEach(function(lib) {
        bundle.require(lib);
    });
    return settings.dest([bundle.bundle().pipe(source('zzz-vendor.js')).pipe(buffer()).pipe(uglify())], settings.public_static_app_dirs)
  });
}
