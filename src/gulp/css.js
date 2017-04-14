module.exports = exports = function(config) {
  var gulp = require('gulp');
  var settings = require('./settings')(config);
  gulp.task(settings.NAME + ':css', function() {
    var sass = require('gulp-sass');
    // var sourcemaps = require('gulp-sourcemaps');
    var autoprefixer = require('gulp-autoprefixer');
    var concat = require('gulp-concat');
    var  bundle = gulp.src([settings.SRC_APP + '/sass/styles.scss'])
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('zzz.css'))
    // .pipe(sourcemaps.write('./'))
    return settings.dest([
      bundle
    ], settings.public_static_app_dirs)
  });
}
