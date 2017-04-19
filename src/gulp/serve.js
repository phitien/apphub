module.exports = exports = function(config) {
  var gulp = require('gulp');
  var runSequence = require('run-sequence');
  var connect = require('gulp-connect');
  var settings = require('./settings')(config);
  gulp.task(settings.NAME + ':watch', function() {
    // if (settings.env == 'production' || settings.env == 'stage' || settings.env == 'test') return;
    gulp.watch(settings.getAllFiles(settings.SRC_CORE, '*.js', 7), function() {
      runSequence(settings.NAME + ':js', settings.NAME + ':reload')
    });
    gulp.watch(settings.getAllFiles(settings.SRC_COMMON, '*.js', 7), function() {
      runSequence(settings.NAME + ':js', settings.NAME + ':reload')
    });
    gulp.watch(settings.getAllFiles(settings.SRC_APP, '*.js', 7), function() {
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
    return gulp.src([
      settings.PUBLIC_STATIC_APP + '/*.css',
      settings.PUBLIC_STATIC_APP + '/*.js',
      settings.PUBLIC_APP + '/*.html'
    ]).pipe(connect.reload());
  });
  gulp.task(settings.NAME + ':server', function() {
    // if (settings.env == 'production' || settings.env == 'stage' || settings.env == 'test') return;
    try {
        return connect.server({
          name: 'Dev server',
          root: settings.PUBLIC,
          port: settings.port,
          livereload: {
            port: settings.livereloadport,
          },
          fallback: settings.PUBLIC_APP + '/' + settings.NAME + '.html'
        });
    }
    catch(e) {console.error(e)}
  });
  gulp.task(settings.NAME + ':serve', function() {
    return runSequence(
      settings.NAME + ':watch',
      settings.NAME + ':server')
  });
}
