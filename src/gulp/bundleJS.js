var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
// var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var assign = require('object-assign');

function buildJS(entry, dest) {
    var bundleConfig = {
        entries: [entry],
        extensions: ['.jsx'],
        debug: true,
        fullPaths: true,
        noBundleExternal: true,
        transform: [babelify],
    };
    var _bundle = browserify(bundleConfig);
    function doBundle() {
        return _bundle
            .bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            // .pipe(sourcemaps.init())
            // .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(dest))
    }
    _bundle.on('update', doBundle);
    return doBundle();
}

module.exports = buildJS;
