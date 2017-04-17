import {applyMiddleware, compose} from 'redux'
import _thunk from './thunk'
import _saga from './saga'
import _logger from './logger'

import {configuration, DevTools} from '../..'

export default configuration.isDebug() ? compose(
    applyMiddleware(
        _saga,
        _thunk,
        // _logger
    ),
    DevTools.instrument()
) : applyMiddleware(
    _saga,
    _thunk
)

export const runSaga = _saga.run
