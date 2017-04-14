module.exports = exports = function(config) {
  var gulp = require('gulp');
  var runSequence = require('run-sequence');
  var settings = require('./settings')(config);
  gulp.task(config.appname + ':build', function() {
    var rs = runSequence(
      config.appname + ':config',
      config.appname + ':js',
      config.appname + ':css',
      config.appname + ':copy',
      config.appname + ':inject');
    console.log('Output:', settings.public_dirs)
    return rs;
  });
}
