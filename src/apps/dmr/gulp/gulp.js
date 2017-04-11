var vendor = require('../../../gulp/vendor');
var bundleJS = require('../../../gulp/bundleJS');
var bundleCSS = require('../../../gulp/bundleCSS');

var gulp = require('gulp');
var inject = require('gulp-inject');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var connect = require('gulp-connect');

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
var PUBLIC = './public';
// var PUBLIC = './server/src/main/resources/templates';
var PUBLIC_STATIC = PUBLIC + STATIC;
var PUBLIC_STATIC_APP = PUBLIC_STATIC + APP;
var HTML_DIR = './public' + APP;
var HTML_DIR_JAVA = './server/src/main/resources/templates';

var VENDOR_LIBS = [
  'react', 'react-dom', 'react-router', 'flux', 'events',
  'redux', 'react-redux', 'redux-thunk',
  'material-ui', 'react-tap-event-plugin',
  'lodash', 'object-assign', 'moment', 'when', 'axios'
];

gulp.task(NAME + ':clean', function() {
  return gulp.src(PUBLIC, {read: false}).pipe(clean());
});
gulp.task(NAME + ':vendor', function() {
  return vendor(PUBLIC_STATIC_APP, VENDOR_LIBS);
});
gulp.task(NAME + ':config', function() {
  return gulp.src(SRC + '/core/config-default.jsx')
    .pipe(replace('{env}', process.env.NODE_ENV))
    .pipe(rename('config.jsx'))
    .pipe(gulp.dest(SRC_APP, {overwrite: true}));
});
gulp.task(NAME + ':js', function() {
  return bundleJS(SRC_APP + '/entry.jsx', PUBLIC_STATIC_APP, VENDOR_LIBS);
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
  gulp.src([
    './node_modules/react-table/react-table.css'
  ])
  .pipe(gulp.dest(PUBLIC_STATIC_APP));
});
gulp.task(NAME + ':inject', function() {
  return gulp.src(SRC_TEMPLATE + '/index.html')
  .pipe(inject(gulp.src([
    PUBLIC_STATIC_APP + '/*.css',
    PUBLIC_STATIC_APP + '/*.js'
  ], {read: false}), {
    transform: function(filepath) {
      return /\.css$/.test(filepath) ? '<link href="'+filepath.replace(PUBLIC.substr(1),'')+'" rel="stylesheet"/>' :
      '<script src="'+filepath.replace(PUBLIC.substr(1),'')+'"></script>'
    }
  }))
  .pipe(gulp.dest(HTML_DIR, {overwrite: true}))
  .pipe(rename(APP + '.html'))
  .pipe(gulp.dest(HTML_DIR_JAVA, {overwrite: true}))
});
gulp.task(NAME + ':watch', function() {
  gulp.watch([SRC + '/**/*.jsx',SRC + '/**/**/*.jsx',SRC + '/**/**/**/*.jsx',SRC + '/**/**/**/**/*.jsx',SRC + '/**/**/**/**/**/*.jsx',SRC + '/**/**/**/**/**/**/*.jsx'], function() {
    runSequence(NAME + ':js', NAME + ':reload')
  })
  gulp.watch([SRC + '/**/*.scss',SRC + '/**/**/*.scss',SRC + '/**/**/**/*.scss',SRC + '/**/**/**/**/*.scss',SRC + '/**/**/**/**/**/*.scss',SRC + '/**/**/**/**/**/**/*.scss'], function() {
    runSequence(NAME + ':css', NAME + ':reload')
  })
  gulp.watch(SRC_TEMPLATE + '/*.html', function() {
      runSequence(NAME + ':inject', NAME + ':reload')
  })
  gulp.watch(SRC_MOCK + '/*.json', function() {
      runSequence(NAME + ':copy', NAME + ':reload')
  })
});
gulp.task(NAME + ':reload', function() {
  gulp.src([
    PUBLIC_STATIC_APP + '/*.css',
    PUBLIC_STATIC_APP + '/*.js',
    PUBLIC + APP + '/*.html'
  ]).pipe(connect.reload());
});
gulp.task(NAME + ':server', function() {
  return connect.server({
    name: 'Dev server',
    root: './public',
    port: 2000,
    livereload: {
      port: 35729
    },
    fallback: './public/dmr/index.html'
  });
});
gulp.task(NAME + ':build', function() {
  return runSequence(
    NAME + ':config',
    NAME + ':js',
    NAME + ':css',
    NAME + ':copy',
    NAME + ':inject')
});
gulp.task(NAME + ':serve', function() {
  return runSequence(
    NAME + ':watch',
    NAME + ':server')
});
gulp.task(NAME, function() {
  return runSequence(
    NAME + ':clean',
    NAME + ':vendor',
    NAME + ':build',
    NAME + ':serve')
});
