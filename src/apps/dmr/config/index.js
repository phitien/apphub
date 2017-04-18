import {Config} from '../../../core/Config'
export default new Config(
    {env: 'mock', appname: 'Data Model Repository', app: 'DMR', apppath: '/dmr', version: '0.0.1'},
    require('./base'),
    require('./mock')
).all()
