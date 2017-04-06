var bundleJS = require('../../../gulp/bundleJS');
var bundleCSS = require('../../../gulp/bundleCSS');

var gulp = require('gulp');
var inject = require('gulp-inject');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload')

var NAME = 'dmr';
var APP = '/' + NAME;

var SRC = './src';
var SRC_STATIC = SRC + '/static';
var SRC_APPS = SRC + '/apps';
var SRC_APP = SRC_APPS + APP;
var SRC_TEMPLATE = SRC_APP + '/template';
var SRC_MOCK = SRC_APP + '/mock';
var SRC_STATIC_APP = SRC_APP + '/static';

var STATIC = '/static';
var PUBLIC = './server/src/main/resources/public';
var PUBLIC_STATIC = PUBLIC + STATIC;
var PUBLIC_STATIC_APP = PUBLIC_STATIC + APP;

gulp.task(NAME + ':js', function() {
  return bundleJS(SRC_APP + '/entry.jsx', PUBLIC_STATIC_APP);
});
gulp.task(NAME + ':css', function() {
  return bundleCSS(SRC_APP + '/sass/styles.scss', PUBLIC_STATIC_APP);
});
gulp.task(NAME + ':copy', function() {
  gulp.src([
    SRC_STATIC + '/*',
    SRC_STATIC + '/**/*',
    SRC_STATIC + '/**/**/*',
  ])
  .pipe(gulp.dest(PUBLIC_STATIC));
  gulp.src([
    SRC_STATIC_APP + '/*',
    SRC_STATIC_APP + '/**/*',
    SRC_STATIC_APP + '/**/**/*',
  ])
  .pipe(gulp.dest(PUBLIC_STATIC_APP));
  gulp.src([
    SRC_MOCK + '/*',
    SRC_MOCK + '/**/*',
    SRC_MOCK + '/**/**/*',
  ])
  .pipe(gulp.dest(PUBLIC_STATIC_APP + '/api'));
});
gulp.task(NAME + ':inject', function() {
  return gulp.src(SRC_TEMPLATE + '/index.html')
  .pipe(inject(gulp.src([
    PUBLIC_STATIC_APP + '/*.css',
    PUBLIC_STATIC_APP + '/*.js'
  ], {read: false})))
  .pipe(gulp.dest(PUBLIC + APP, {overwrite: true}))
});
gulp.task(NAME + ':normalise', function() {
  return gulp.src(PUBLIC + APP + '/index.html')
  .pipe(replace(PUBLIC.substr(1), ''))
  .pipe(gulp.dest(PUBLIC + APP, {overwrite: true}))
});
gulp.task(NAME + ':watch', function() {
  livereload.listen()
  gulp.watch([SRC + '/**/*.jsx',SRC + '/**/**/*.jsx',SRC + '/**/**/**/*.jsx',SRC + '/**/**/**/**/*.jsx',SRC + '/**/**/**/**/**/*.jsx',SRC + '/**/**/**/**/**/**/*.jsx'], function() {
    runSequence(NAME + ':js')
  })
  gulp.watch([SRC + '/**/*.scss',SRC + '/**/**/*.scss',SRC + '/**/**/**/*.scss',SRC + '/**/**/**/**/*.scss',SRC + '/**/**/**/**/**/*.scss',SRC + '/**/**/**/**/**/**/*.scss'], function() {
    runSequence(NAME + ':css')
  })
  gulp.watch(SRC_TEMPLATE + '/*.html', function() {
      runSequence(NAME + ':inject')
  })
  gulp.watch(SRC_MOCK + '/*.json', function() {
      runSequence(NAME + ':copy')
  })
  gulp.watch(PUBLIC_STATIC_APP + '/*.css').on('change', livereload.reload)
  gulp.watch(PUBLIC_STATIC_APP + '/*.js').on('change', livereload.reload)
  gulp.watch(PUBLIC + APP + '/*.html').on('change', livereload.reload)
});
gulp.task(NAME + '', function() {
  return runSequence(NAME + ':js', NAME + ':css', NAME + ':copy', NAME + ':inject', NAME + ':normalise')
});
