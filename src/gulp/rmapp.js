var gulp = require('gulp');
gulp.task('rmapp', function() {
  var argv = require('./argv');
  var appname = argv('name');

  if (!appname) {
    console.error('Name is missing:--name=')
    return;
  }
  if (appname == 'sample') {
    console.error('Name must not be sample')
    return;
  }
  var settings = require('./settings')({appname: appname});
  var fs = require('fs');
  fs.stat(settings.SRC_APP + '/index.jsx', function(err, stat) {
      if(err == null) {
        var clean = require('gulp-clean');
        gulp.src([settings.SRC_APPS + '/' + appname], {read: false}).pipe(clean())

      }
      var replace = require('gulp-replace');
      return gulp.src(['./gulpfile.js']).pipe(replace(settings.GULP_NEW_APP + "\n", ""))
      .pipe(gulp.dest('.'));
  });
});
