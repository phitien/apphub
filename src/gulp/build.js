module.exports = exports = function(config) {
    require('./config')(config);
    require('./js')(config);
    require('./css')(config);
    require('./copy')(config);
    require('./inject')(config);
    var gulp = require('gulp');
    var runSequence = require('run-sequence');
    var settings = require('./settings')(config);

    gulp.task(settings.config.app + ':build', function() {
        var rs = runSequence(
            settings.config.app + ':config',
            settings.config.app + ':js',
            settings.config.app + ':css',
            settings.config.app + ':copy',
            settings.config.app + ':inject'
        );
        console.log('Output:', settings.public_dirs)
        return rs;
    });

}
