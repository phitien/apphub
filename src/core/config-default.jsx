import Config from '../../core/Config'
new Config({env: '{env}', appname: '{APPNAME}', apppath: '/{appname}', version: '0.0.1'})
new Config(require('./config/base'))
new Config(require('./config/{env}'))
