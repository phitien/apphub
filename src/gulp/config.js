module.exports = exports = function(config) {
  var gulp = require('gulp');
  var settings = require('./settings')(config);
  gulp.task(settings.NAME + ':config', function() {
    var replace = require('gulp-replace');
    var rename = require('gulp-rename');
    return gulp.src(settings.SRC + '/core/config-default.jsx')
      .pipe(replace('{env}', process.env.NODE_ENV))
      .pipe(replace('{appname}', settings.NAME.toLowerCase()))
      .pipe(replace('{APPNAME}', settings.NAME.toUpperCase()))
      .pipe(rename('config.jsx'))
      .pipe(gulp.dest(settings.SRC_APP, {overwrite: true}));
  });
}
