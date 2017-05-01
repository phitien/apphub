module.exports = exports = function(config) {
    global.gulp = require('gulp');
    global.runSequence = require('run-sequence');
    var settings = require('./settings')(config);
    require('./clean')(settings);
    require('./serve')(settings);
    require('./vendor')(settings);
    require('./config')(settings);
    require('./js')(settings);
    require('./css')(settings);
    require('./copy')(settings);
    require('./inject')(settings);
    require('./build')(settings);
    gulp.task(settings.config.app, function() {
        return runSequence(
            settings.config.app + ':clean',
            settings.config.app + ':vendor',
            settings.config.app + ':build',
            settings.config.app + ':serve'
        )
    });
}
