module.exports = exports = function(config) {
  var gulp = require('gulp');
  var settings = require('./settings')(config);
  gulp.task(settings.NAME + ':copy', function() {
    settings.dest([
      gulp.src(settings.getAllFiles(settings.SRC_MOCK, '*')),
    ], settings.public_static_app_api_dirs)
    settings.dest([
      gulp.src(['./node_modules/react-table/react-table.css']),
      gulp.src(settings.getAllFiles(settings.SRC_STATIC, '*')),
    ], settings.public_static_dirs)
    settings.dest([
      gulp.src(settings.getAllFiles('./node_modules/highlight.js', '*')),
    ], settings.public_static_dirs, 'highlight')
    return settings.dest([
      gulp.src(settings.getAllFiles(settings.SRC_STATIC_APP, '*')),
    ], settings.public_static_app_dirs)
  });
}
