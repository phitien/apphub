import util from '../util'
import {getStoreInstance} from './Store'

export default class Reducer {
    get util() {return util}
    get defaultState() {return {}}
    get store() {return getStoreInstance()}
    transform(state = this.defaultState, action) {
        return `${action.type}Reducer` == this.constructor.name
            ? this.matchedTransform(state, action)
            : this.notMatchedTransform(state, action)
    }
    matchedTransform(state, action) {
        return this.util.assign({}, this.defaultState, state)
    }
    notMatchedTransform(state, action) {
        return state
    }
}
