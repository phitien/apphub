import {Config} from '../../../core/Config'
export default new Config(
    {env: '{env}'},
    require('../conf'),
    require('./ui'),
    require('./base'),
    require('./{env}')
).all()
