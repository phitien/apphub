import Config from '../../core/Config'
new Config({env: '{env}'})
new Config(require('./config/mock'))
new Config(require('./config/dev'))
new Config(require('./config/{env}'))
