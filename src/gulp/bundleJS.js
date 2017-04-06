var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
// var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var assign = require('object-assign');

function buildJS(entry, dest, excludes) {
    var bundleConfig = {
        entries: [entry],
        extensions: ['.jsx'],
        debug: true,
        fullPaths: true,
        noBundleExternal: true,
        transform: [babelify],
    };
    var bundler = browserify(bundleConfig);
    excludes.forEach(function (lib) {
        bundler.external(lib);
    });
    function doBundle() {
        return bundler
            .bundle()
            .pipe(source('zzz.js'))
            .pipe(buffer())
            // .pipe(sourcemaps.init())
            // .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(dest))
    }
    bundler.on('update', doBundle);
    return doBundle();
}

module.exports = buildJS;
