var instance = null;
module.exports = exports = function(config) {
  var NAME = config.appname;
  var APP = '/' + NAME;

  var SRC = './src';
  var SRC_CORE = SRC + '/core';
  var SRC_COMMON = SRC + '/common';
  var SRC_STATIC = SRC + '/static';
  var SRC_APPS = SRC + '/apps';
  var SRC_SAMPLE = SRC_APPS + '/sample';
  var SRC_APP = SRC_APPS + APP;
  var SRC_TEMPLATE = SRC_APP + '/template';
  var SRC_MOCK = SRC_APP + '/mock';
  var SRC_STATIC_APP = SRC_APP + '/static';

  var STATIC = '/static';

  var PUBLIC = './public';
  var PUBLIC_STATIC = PUBLIC + STATIC;
  var PUBLIC_STATIC_APP = PUBLIC_STATIC + APP;
  var PUBLIC_STATIC_APP_API = PUBLIC_STATIC_APP + '/api';
  var PUBLIC_APP = PUBLIC + APP;

  var JAVA_RESOURCE = './server/src/main/resources';
  var JAVA_PUBLIC = JAVA_RESOURCE + '/public';
  var JAVA_PUBLIC_STATIC = JAVA_PUBLIC + STATIC;
  var JAVA_PUBLIC_STATIC_APP = JAVA_PUBLIC_STATIC + APP;
  var JAVA_PUBLIC_STATIC_APP_API = JAVA_PUBLIC_STATIC_APP + '/api';
  var JAVA_PUBLIC_APP = JAVA_RESOURCE + '/templates';

  var VENDOR_LIBS = [
    'react', 'react-dom', 'react-router', 'flux', 'events',
    'redux', 'react-redux', 'redux-thunk',
    'material-ui', 'react-tap-event-plugin',
    'lodash', 'object-assign', 'moment', 'when', 'axios'
  ];

  var GULP_NEW_APP_TEXT = '/**NEW_APP**/';
  var GULP_NEW_APP = "gulp(require('"+SRC_APP+"/gulp/gulp'));";
  var GULP_NEW_APP_REPLACEMENT = GULP_NEW_APP + "\n" + GULP_NEW_APP_TEXT;

  var argv = require('./argv');
  var NODE_ENV = argv('NODE_ENV')
  var env = process.env.NODE_ENV = (['mock', 'test', 'stage', 'production'].indexOf(NODE_ENV) >= 0) ? NODE_ENV : 'mock'

  var port = argv('PORT', config.port ? config.port : 2000)
  var livereloadport = argv('LIVE_RELOAD_PORT', config.livereloadport ? config.livereloadport : 35729)

  if (!config.settings) {
    console.log('Environment:')
    console.log('--NODE_ENV='+process.env.NODE_ENV)
    if (env == 'production' || env == 'stage' || env == 'test') {
    }
    else {
      console.log('--PORT='+port);
      console.log('--LIVE_RELOAD_PORT='+livereloadport);
    }
    config.settings = {
      NAME: NAME,
      APP: APP,
      SRC: SRC,
      SRC_CORE: SRC_CORE,
      SRC_COMMON: SRC_COMMON,
      SRC_STATIC: SRC_STATIC,
      SRC_APPS: SRC_APPS,
      SRC_SAMPLE: SRC_SAMPLE,
      SRC_APP: SRC_APP,
      SRC_TEMPLATE: SRC_TEMPLATE,
      SRC_MOCK: SRC_MOCK,
      SRC_STATIC_APP: SRC_STATIC_APP,
      STATIC: STATIC,
      JAVA_RESOURCE: JAVA_RESOURCE,
      VENDOR_LIBS: VENDOR_LIBS,
      PUBLIC: PUBLIC,
      PUBLIC_STATIC: PUBLIC_STATIC,
      PUBLIC_STATIC_APP: PUBLIC_STATIC_APP,
      PUBLIC_STATIC_APP_API: PUBLIC_STATIC_APP_API,
      PUBLIC_APP: PUBLIC_APP,

      GULP_NEW_APP_TEXT: GULP_NEW_APP_TEXT,
      GULP_NEW_APP: GULP_NEW_APP,
      GULP_NEW_APP_REPLACEMENT: GULP_NEW_APP_REPLACEMENT,

      public_dirs: [PUBLIC, JAVA_PUBLIC],
      public_static_dirs: [PUBLIC_STATIC, JAVA_PUBLIC_STATIC],
      public_static_app_dirs: [PUBLIC_STATIC_APP, JAVA_PUBLIC_STATIC_APP],
      public_static_app_api_dirs: [PUBLIC_STATIC_APP_API, JAVA_PUBLIC_STATIC_APP_API],
      public_app_dirs: [PUBLIC_APP, JAVA_PUBLIC_APP],

      env: env,
      port: port,
      livereloadport: livereloadport,
      dest: function(bundles, destinations) {
        var gulp = require('gulp');
        var rs = null;
        bundles.forEach(function(bundle) {
          destinations.forEach(function(destination) {
            rs = bundle.pipe(gulp.dest(destination))
          })
        })
        return rs;
      },
      getAllFiles: function(root, extension, level) {
        function path(lv) {
          var rs = [root + '/']
          for(var i = 0;i < lv;i++) rs.push('**/')
          rs.push(extension)
          return rs.join('')
        }
        if (!level) level = 3
        var rs = []
        for(var i = 0;i < level;i++) rs.push(path(i))
        return rs
      }
    }
  }
  return config.settings;
}
