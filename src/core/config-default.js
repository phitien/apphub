import {Config} from '../../../core/Config'
export default new Config(
    {env: '{env}', appname: '{APPNAME}', apppath: '/{appname}', version: '0.0.1'},
    require('./base'),
    require('./{env}')
).all()
