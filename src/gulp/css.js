module.exports = exports = function(settings) {
    gulp.task(settings.config.app + ':css', function() {
        var sass = require('gulp-sass');
        var autoprefixer = require('gulp-autoprefixer');
        var concat = require('gulp-concat');
        var bundle = gulp.src([settings.SRC_APP + '/sass/styles.scss'])
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('zzz.css'))
        return settings.dest([
          bundle
        ], settings.public_static_app_dirs)
    });
}
