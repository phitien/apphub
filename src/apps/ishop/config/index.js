import {Config} from '../../../core/Config'
export default new Config(
    {env: 'mock'},
    require('../conf'),
    require('./ui'),
    require('./base'),
    require('./mock')
).all()
