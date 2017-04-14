import Config from '../../core/Config'
new Config({env: 'mock', appname: 'DMR', apppath: '/dmr'})
new Config(require('./config/base'))
new Config(require('./config/mock'))
