module.exports = exports = function(config) {
  var gulp = require('gulp');
  var settings = require('./settings')(config);
  gulp.task(settings.config.app + ':copy', function() {
    settings.dest([
      gulp.src(['./node_modules/material-design-icons/iconfont/*']),
    ], settings.public_static_dirs, 'material')
    settings.dest([
      gulp.src(settings.getAllFiles(settings.SRC_STATIC, '*')),
    ], settings.public_static_dirs)
    settings.dest([
      gulp.src(settings.getAllFiles(settings.SRC_MOCK, '*')),
    ], settings.public_static_app_api_dirs)
    return settings.dest([
      gulp.src(settings.getAllFiles(settings.SRC_STATIC_APP, '*')),
    ], settings.public_static_app_dirs)
  });
}
