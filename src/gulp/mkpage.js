var gulp = require('gulp');
gulp.task('mkpage', function() {
    var argv = require('./argv');
    var app = argv('app');
    var name = argv('name');
    var api = argv('api');

    if (!app) {
        console.error('No App provided: gulp mkpage --app=app --name=name --api=?');
        return;
    }
    if (!name) {
        console.error('No page name provided: gulp mkpage --app=app --name=name --api=?');
        return;
    }

    var Name = name[0].toUpperCase() + name.substring(1);
    var fs = require('fs');
    var settings = require('./settings')({app: app});

    fs.stat(settings.SRC_APP + '/index.js', function(err, stat) {
        if(err == null) {
            fs.stat(settings.SRC_APP + '/pages/' + Name + 'Page.js', function(e, s) {
                if(e == null) {
                    console.error('Page ' + Name + ' already exists');
                } else {
                    var rename = require('gulp-rename');
                    var replace = require('gulp-replace');
                    var batchReplace = require('gulp-batch-replace');
                    gulp.src(settings.SRC_SAMPLE + '/pages/SubPage.js')
                        .pipe(batchReplace([
                            ['Sub', Name],
                            ['{app}', app],
                            ['{appname}', app],
                            ['pageLoadedApi = null', 'pageLoadedApi = ' + (api ? '\'' + api + '\'' : 'null')]
                        ]))
                        .pipe(rename(Name + 'Page.js'))
                        .pipe(gulp.dest(settings.SRC_APP + '/pages'));
                    gulp.src(settings.SRC_APP + '/pages/index.js')
                        .pipe(replace('/**NEWPAGE**/', "exports."+Name+"Page = require('./"+Name+"Page').default\n/**NEWPAGE**/"))
                        .pipe(gulp.dest(settings.SRC_APP + '/pages', {overwrite: true}));
                    gulp.src(settings.SRC_APP + '/routes.js')
                        .pipe(replace('/**NEWPAGE**/', "{path: '/"+app+"/"+name+"', component: pages."+Name+"Page, onChange: onRouteChanged},\n/**NEWPAGE**/"))
                        .pipe(gulp.dest(settings.SRC_APP, {overwrite: true}));
                    gulp.src(settings.SRC_SAMPLE + '/sass/sub-page.scss')
                        .pipe(batchReplace([['sub', name], ['{app}', app]]))
                        .pipe(rename(name + '-page.scss'))
                        .pipe(gulp.dest(settings.SRC_APP + '/sass'));
                    gulp.src(settings.SRC_APP + '/sass/styles.scss')
                        .pipe(replace('/**NEWPAGE**/', "@import \"./"+name+"-page.scss\";\n/**NEWPAGE**/"))
                        .pipe(gulp.dest(settings.SRC_APP + '/sass', {overwrite: true}));
                }
            })
        } else {
            console.error('App ' + app + ' does not exist');
        }
    });
});
