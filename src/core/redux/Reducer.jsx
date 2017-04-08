import util from '../util'
import REDUCERS from './REDUCERS'

export default class Reducer {
    get util() {return util}
    get defaultState() {return {}}
    constructor(name) {
        REDUCERS[this.constructor.name] = (state = this.defaultState, action) => this.transform(state, action)
    }
    transform(state, action) {
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
