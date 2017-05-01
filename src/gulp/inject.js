module.exports = exports = function(config) {
  var gulp = require('gulp');
  var settings = require('./settings')(config);
  gulp.task(settings.config.app + ':inject', function() {
    var inject = require('gulp-inject');
    var rename = require('gulp-rename');
    var bundle = gulp.src(settings.SRC_TEMPLATE + '/index.html')
    .pipe(inject(gulp.src([
      settings.PUBLIC_STATIC_APP + '/*.css',
      settings.PUBLIC_STATIC_APP + '/*.js'
    ], {read: false}), {
      transform: function(filepath) {
        return /\.css$/.test(filepath) ? '<link href="'+filepath.replace(settings.PUBLIC.substr(1),'')+'" rel="stylesheet"/>' :
        '<script src="'+filepath.replace(settings.PUBLIC.substr(1),'')+'"></script>'
      }
    }))
    .pipe(rename(settings.config.app + '.html'))
    return settings.dest([
      bundle
    ], settings.public_app_dirs)
  });
}
