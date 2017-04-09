import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import util from '../util'

let store = null
export const getStoreInstance = (reducers) => {
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
            applyMiddleware(thunk)
        )
    }
    return store
}

export default store
