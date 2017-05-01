module.exports = exports = function(config) {
  var gulp = require('gulp');
  var runSequence = require('run-sequence');
  var settings = require('./settings')(config);
  require('./clean')(config);
  require('./serve')(config);
  require('./vendor')(config);
  require('./build')(config);
  gulp.task(settings.config.app, function() {
    return runSequence(
        settings.config.app + ':clean',
        settings.config.app + ':vendor',
        settings.config.app + ':build',
        settings.config.app + ':serve'
    )
  });
}
