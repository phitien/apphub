import Config from '../../core/Config'
new Config({env: '{env}', appname: '{APPNAME}', apppath: '/{appname}'})
new Config(require('./config/base'))
new Config(require('./config/{env}'))
