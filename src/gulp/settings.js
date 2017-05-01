module.exports = exports = function(config) {
    var APP = '/' + config.app;

    var SRC = './src';
    var SRC_CORE = SRC + '/core';
    var SRC_COMMON = SRC + '/common';
    var SRC_STATIC = SRC + '/static';
    var SRC_APPS = SRC + '/apps';
    var SRC_SAMPLE = SRC + '/sample';
    var SRC_APP = SRC_APPS + APP;
    var SRC_APP_GULP = SRC_APP + '/conf';
    var SRC_TEMPLATE = SRC_APP + '/template';
    var SRC_MOCK = SRC_APP + '/mock';
    var SRC_APP_CONFIG = SRC_APP + '/config';
    var SRC_STATIC_APP = SRC_APP + '/static';

    var STATIC = '/static';

    var PUBLIC = './public';
    var PUBLIC_STATIC = PUBLIC + STATIC;
    var PUBLIC_STATIC_APP = PUBLIC_STATIC + APP;
    var PUBLIC_STATIC_APP_API = PUBLIC_STATIC_APP + '/api';
    var PUBLIC_APP = PUBLIC + APP;

    var JAVA_RESOURCE = './server/src/main/resources';
    var JAVA_PUBLIC = JAVA_RESOURCE + '';
    var JAVA_PUBLIC_STATIC = JAVA_PUBLIC + STATIC;
    var JAVA_PUBLIC_STATIC_APP = JAVA_PUBLIC_STATIC + APP;
    var JAVA_PUBLIC_STATIC_APP_API = JAVA_PUBLIC_STATIC_APP + '/api';
    var JAVA_PUBLIC_APP = JAVA_RESOURCE + '/templates';

    var LIBS = [
        ['react', 'react-dom', 'react-router', 'flux', 'events'],
        ['redux', 'react-redux', 'redux-thunk', 'redux-saga', 'normalizr', 'redux-devtools', 'redux-devtools-dock-monitor', 'redux-devtools-log-monitor', 'redux-logger'],
        ['uuid', 'string-format', 'lodash', 'object-assign', 'moment', 'when', 'axios'],
    ];

    var GULP_NEW_APP_TEXT = '/**NEW_APP**/';
    var GULP_NEW_APP = "addGulpTasks(require('"+SRC_APP+"/conf'));";
    var GULP_NEW_APP_REPLACEMENT = GULP_NEW_APP + "\n" + GULP_NEW_APP_TEXT;

    var argv = require('./argv');
    var NODE_ENV = argv('NODE_ENV');
    var env = process.env.NODE_ENV = (['mock', 'dev', 'test', 'stage', 'production'].indexOf(NODE_ENV) >= 0) ? NODE_ENV : 'mock';
    console.log('Environment:');
    console.log('--NODE_ENV=' + process.env.NODE_ENV);
    return {
        config: config,
        SRC: SRC,
        SRC_CORE: SRC_CORE,
        SRC_COMMON: SRC_COMMON,
        SRC_STATIC: SRC_STATIC,
        SRC_APPS: SRC_APPS,
        SRC_SAMPLE: SRC_SAMPLE,
        SRC_APP: SRC_APP,
        SRC_APP_CONFIG: SRC_APP_CONFIG,
        SRC_APP_GULP: SRC_APP_GULP,
        SRC_TEMPLATE: SRC_TEMPLATE,
        SRC_MOCK: SRC_MOCK,
        SRC_STATIC_APP: SRC_STATIC_APP,
        STATIC: STATIC,
        JAVA_RESOURCE: JAVA_RESOURCE,
        LIBS: LIBS,
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
        isDebug: function () {
            return this.env == 'dev' || this.env == 'mock'
        },
        dest: function(bundles, destinations, subdir) {
            subdir = subdir ? '/' + subdir : ''
            var gulp = require('gulp');
            var rs = null;
            bundles.forEach(function(bundle) {
              destinations.forEach(function(destination) {
                rs = bundle.pipe(gulp.dest(destination + subdir))
              })
            })
            return rs;
        },
        getAllFiles: function(root, extension, level, reverve) {
            function path(lv) {
                var rs = [root + '/']
                for(var i = 0;i < lv;i++) rs.push('**/')
                rs.push(extension)
                return rs.join('')
            }
            if (!level) level = 3
            var rs = []
            if (reverve) {
                for(var i = level - 1;i >= 0;i--) rs.push(path(i))
            }
            else {
                for(var i = 0;i < level;i++) rs.push(path(i))
            }
            return rs
        }
    }
}
