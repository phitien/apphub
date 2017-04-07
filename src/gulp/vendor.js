var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var browserify = require('browserify');

module.exports = function (dest, libs) {
    var bundler = browserify({
        debug: true,
    });
    libs.forEach(function(lib) {
        bundler.require(lib);
    });
    return bundler.bundle()
    .pipe(source('zzz-vendor.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(dest));
}
