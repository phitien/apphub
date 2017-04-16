import {Config} from '../../core/Config'
export default new Config(
    {env: 'mock', appname: 'DMR', apppath: '/dmr', version: '0.0.1'},
    require('./config/base'),
    require('./config/mock')
).all()
