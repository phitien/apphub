import {Config} from '../../../core/Config'
export default new Config(
    {env: 'production', appname: 'ASD', app: 'ASD', apppath: '/asd', version: '0.0.1'},
    require('./base'),
    require('./production')
).all()
