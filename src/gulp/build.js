module.exports = exports = function(settings) {
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
