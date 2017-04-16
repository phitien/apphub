import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'
import {util, configuration, DevTools} from '..'

let store = null
export const getStoreInstance = (reducers, initialState) => {
    if (util.isEmpty(store) && reducers) {
        const sagaMiddleware = createSagaMiddleware()
        const transformers = {}
        if (typeof reducers == 'function') {
            const reducer = new reducers()
            transformers[reducers.name] = reducer.transform.bind(reducer)
        }
        else {
            for(var j in reducers) {
                if (typeof reducers[j] == 'function') {
                    const reducer = new reducers[j]()
                    transformers[reducers[j].name] = reducer.transform.bind(reducer)
                }
            }
        }
        const middleware = configuration.isDebug ? compose(
            applyMiddleware(
                sagaMiddleware,
                thunk,
                createLogger()
            ),
            DevTools.instrument()
        ) : applyMiddleware(
            sagaMiddleware,
            thunk
        )

        store = createStore(
            combineReducers(transformers),
            initialState,
            middleware
        )
        store.runSaga = sagaMiddleware.run
        store.close = () => store.dispatch(END)
    }
    return store
}

export default store
