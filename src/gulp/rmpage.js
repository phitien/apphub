var gulp = require('gulp');
gulp.task('rmpage', function() {
    var argv = require('./argv');
    var app = argv('app');
    var name = argv('name');

    if (!app) {
        console.error('No App provided: gulp mkpage --app=app --name=name');
        return;
    }
    if (!name) {
        console.error('No page name provided: gulp mkpage --app=app --name=name');
        return;
    }

    var Name = name[0].toUpperCase() + name.substring(1);
    var fs = require('fs');
    var settings = require('./settings')({app: app});

    fs.stat(settings.SRC_APP + '/index.js', function(err, stat) {
        if(err == null) {
            fs.stat(settings.SRC_APP + '/pages/' + Name + 'Page.js', function(e, s) {
                if(e == null) {
                    var replace = require('gulp-replace');
                    var clean = require('gulp-clean');
                    gulp.src(settings.SRC_APP + '/routes.js')
                        .pipe(replace("{path: conf.apppath + '/"+name+"', component: pages."+Name+"Page, onChange: onRouteChanged},\n", ""))
                        .pipe(gulp.dest(settings.SRC_APP, {overwrite: true}));

                    gulp.src(settings.SRC_APP + '/pages/index.js')
                        .pipe(replace("exports."+Name+"Page = require('./"+Name+"Page').default\n", ""))
                        .pipe(gulp.dest(settings.SRC_APP + '/pages', {overwrite: true}));

                    gulp.src(settings.SRC_APP + '/sass/styles.scss')
                        .pipe(replace("@import \"./"+name+"-page.scss\";\n", ""))
                        .pipe(gulp.dest(settings.SRC_APP + '/sass', {overwrite: true}));

                    gulp.src([
                        settings.SRC_APP + '/pages/'+Name+'Page.js',
                        settings.SRC_APP + '/sass/'+name+'-page.scss'
                    ]).pipe(clean())
                } else {
                    console.error('Page ' + Name + ' does not exist');
                }
            })
        } else {
            console.error('App ' + app + ' does not exist');
        }
    });
});
