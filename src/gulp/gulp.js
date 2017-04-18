module.exports = exports = function(config) {
  var gulp = require('gulp');
  var runSequence = require('run-sequence');
  var settings = require('./settings')(config);
  require('./clean')(config);
  require('./vendor')(config);
  require('./config')(config);
  require('./js')(config);
  require('./css')(config);
  require('./copy')(config);
  require('./inject')(config);
  require('./serve')(config);
  require('./build')(config);
  gulp.task(settings.NAME, function() {
    return runSequence(
      // settings.NAME + ':clean',
      // settings.NAME + ':vendor',
      settings.NAME + ':build',
      settings.NAME + ':serve')
  });
}
