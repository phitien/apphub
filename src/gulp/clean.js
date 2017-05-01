module.exports = exports = function(config) {
  var gulp = require('gulp');
  var settings = require('./settings')(config);
  gulp.task(settings.config.app + ':clean', function() {
      if (!settings.isDebug()) {
          var clean = require('gulp-clean');
          return gulp.src(settings.public_static_dirs, {read: false}).pipe(clean());
      }
  });
}
