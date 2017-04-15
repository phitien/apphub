import Config from '../../core/Config'
new Config({env: 'mock', appname: 'DMR', apppath: '/dmr', version: '0.0.1'})
new Config(require('./config/base'))
new Config(require('./config/mock'))
