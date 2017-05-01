import {Config} from '../../../core/Config'
export default new Config(
    {env: '{env}'},
    {config},
    require('./ui'),
    require('./base'),
    require('./{env}')
).all()
