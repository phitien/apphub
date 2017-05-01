module.exports = exports = function(config) {
  var gulp = require('gulp');
  var runSequence = require('run-sequence');
  var connect = require('gulp-connect');
  var settings = require('./settings')(config);
  var livereload = require('gulp-livereload');

  gulp.task(settings.config.app + ':watch', function() {
    // if (!settings.isDebug()) return;
    livereload.listen(settings.livereloadport);
    gulp.watch(settings.getAllFiles(settings.SRC_CORE, '*.js', 7), [settings.config.app + ':js']);
    gulp.watch(settings.getAllFiles(settings.SRC_COMMON, '*.js', 7), [settings.config.app + ':js']);
    gulp.watch(settings.getAllFiles(settings.SRC_APP, '*.js', 7), [settings.config.app + ':js']);
    gulp.watch(settings.getAllFiles(settings.SRC_COMMON, '*.scss', 7), [settings.config.app + ':css']);
    gulp.watch(settings.getAllFiles(settings.SRC_APP, '*.scss', 7), [settings.config.app + ':css']);
    gulp.watch(settings.SRC_TEMPLATE + '/*.html', [settings.config.app + ':inject']);
    gulp.watch(settings.SRC_MOCK + '/*.json', [settings.config.app + ':copy']);
    gulp.watch([
        settings.PUBLIC_STATIC_APP + '/*.css', settings.PUBLIC_STATIC_APP + '/**/*.css',
        settings.PUBLIC_STATIC_APP + '/*.js', settings.PUBLIC_STATIC_APP + '/**/*.js',
        settings.PUBLIC_APP + '/*.html'
    ])
    .on('change', livereload.reload);
  });
  gulp.task(settings.config.app + ':connect', function() {
    // if (!settings.isDebug()) return;
    return connect.server({
      name: 'Dev server',
      root: settings.PUBLIC,
      port: settings.port,
      livereload: {port: settings.livereloadport},
      fallback: settings.PUBLIC_APP + '/' + settings.config.app + '.html'
    });
  });
  gulp.task(settings.config.app + ':serve', function() {
    return runSequence(
      settings.config.app + ':watch',
      settings.config.app + ':connect')
  });
}
