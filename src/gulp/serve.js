module.exports = exports = function(config) {
  var gulp = require('gulp');
  var runSequence = require('run-sequence');
  var connect = require('gulp-connect');
  var settings = require('./settings')(config);
  gulp.task(settings.NAME + ':watch', function() {
    if (settings.env == 'production' || settings.env == 'stage' || settings.env == 'test') return;
    console.log(settings.getAllFiles(settings.SRC_CORE, '*.jsx', 7))
    gulp.watch(settings.getAllFiles(settings.SRC_CORE, '*.jsx', 7), function() {
      runSequence(settings.NAME + ':js', settings.NAME + ':reload')
    });
    gulp.watch(settings.getAllFiles(settings.SRC_COMMON, '*.jsx', 7), function() {
      runSequence(settings.NAME + ':js', settings.NAME + ':reload')
    });
    gulp.watch(settings.getAllFiles(settings.SRC_APP, '*.jsx', 7), function() {
      runSequence(settings.NAME + ':js', settings.NAME + ':reload')
    });
    gulp.watch(settings.getAllFiles(settings.SRC_COMMON, '*.scss', 7), function() {
      runSequence(settings.NAME + ':css', settings.NAME + ':reload')
    });
    gulp.watch(settings.getAllFiles(settings.SRC_APP, '*.scss', 7), function() {
      runSequence(settings.NAME + ':css', settings.NAME + ':reload')
    });
    gulp.watch(settings.SRC_TEMPLATE + '/*.html', function() {
        runSequence(settings.NAME + ':inject', settings.NAME + ':reload')
    });
    gulp.watch(settings.SRC_MOCK + '/*.json', function() {
        runSequence(settings.NAME + ':copy', settings.NAME + ':reload')
    });
  });
  gulp.task(settings.NAME + ':reload', function() {
    if (settings.env == 'production' || settings.env == 'stage' || settings.env == 'test') return;
    gulp.src([
      settings.PUBLIC_STATIC_APP + '/*.css',
      settings.PUBLIC_STATIC_APP + '/*.js',
      settings.PUBLIC_APP + '/*.html'
    ]).pipe(connect.reload());
  });
  gulp.task(settings.NAME + ':server', function() {
    if (settings.env == 'production' || settings.env == 'stage' || settings.env == 'test') {
      return connect.server({
        name: 'Live server',
        root: settings.PUBLIC,
        port: settings.port,
        fallback: settings.PUBLIC_APP + '/' + settings.NAME + '.html'
      });
    }
    return connect.server({
      name: 'Dev server',
      root: settings.PUBLIC,
      port: settings.port,
      livereload: {
        port: settings.livereloadport,
      },
      fallback: settings.PUBLIC_APP + '/' + settings.NAME + '.html'
    });
  });
  gulp.task(settings.NAME + ':serve', function() {
    return runSequence(
      settings.NAME + ':watch',
      settings.NAME + ':server')
  });
}
