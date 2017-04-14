var gulp = require('gulp');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
gulp.task('mkapp', function() {
  var argv = require('./argv');
  var appname = argv('name');
  var port = argv('port', 2000);
  var livereloadport = argv('livereloadport', 35729);

  if (!appname) {
    console.error('Name is missing:--name=')
    return;
  }
  if (appname == 'sample') {
    console.error('Name must not be sample')
    return;
  }
  var settings = require('./settings')({appname: appname, port: port, livereloadport: livereloadport});
  var fs = require('fs');
  var replace = require('gulp-replace');
  fs.stat(settings.SRC_APP + '/index.jsx', function(err, stat) {
      if(err == null) {
        console.error('App ' + appname + ' already exists');
      } else {
        gulp.src(settings.getAllFiles(settings.SRC_SAMPLE, '*', 10))
        .pipe(replace('{appname}', appname))
        .pipe(replace('{APPNAME}', appname.toUpperCase()))
        .pipe(replace('{port}', port))
        .pipe(replace('{livereloadport}', livereloadport))
        .pipe(gulp.dest(settings.SRC_APPS + '/' + appname))
      }
      return gulp.src(['./gulpfile.js']).pipe(replace(settings.GULP_NEW_APP_TEXT, settings.GULP_NEW_APP_REPLACEMENT))
      .pipe(gulp.dest('.'));
  });
});
