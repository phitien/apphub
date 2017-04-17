import {createStore, combineReducers} from 'redux'
import { END } from 'redux-saga'
import middlewares, {runSaga} from './middlewares'
import {util} from '..'

let store = null
export const getStore = (reducers, initialState) => {
    if (util.isEmpty(store) && reducers) {
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
        store = createStore(
            combineReducers(transformers),
            initialState,
            middlewares
        )
        store.runSaga = runSaga
        store.close = () => store.dispatch(END)
    }
    return store
}

export default store
