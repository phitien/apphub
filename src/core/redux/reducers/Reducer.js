import {util, configuration} from '../..'
import {getStore} from '../Store'

export default class Reducer {
    debug = false
    get name() {return this.constructor.name}
    get configuration() {return configuration}
    get util() {return util}
    get store() {return getStore()}
    get state() {return this.store.getState()[this.name]}

    get fieldName() {throw `${this.name}: No fieldName`}
    get defaultState() {return {
        [this.fieldName]: this.defaultValue,
        [`Search${this.fieldName}Results`]: null
    }}
    get defaultValue() {return null}
    transform(state = this.defaultState, action, ...args) {
        return `${action.type}` == this.name
        || `${action.type}Reducer` == this.name
        || `Search${action.type}Reducer` == `Search${this.name}`
            ? this.matchedTransform(state, action, ...args)
            : this.notMatchedTransform(state, action, ...args)
    }
    normalize(action) {return action.data}
    normalizeSearch(action) {return action.search}
    debugFn(state, action, ...args) {
        console.log(this.name)
        console.log('prev-state', state)
        console.log('next-state', this.value)
        console.log('action', action)
        console.log('extra', ...args)
    }
    matchedTransform(state, action, ...args) {
        this.action = action
        if (action.hasOwnProperty('data')) this.value = {[this.fieldName]: this.normalize(action)}
        else if (action.hasOwnProperty('search')) this.value = {[`Search${this.fieldName}Results`]: this.normalizeSearch(action)}
        if (this.debug) this.debugFn(state, action, ...args)
        return this.util.assign({}, this.defaultState, state, this.value)
    }
    notMatchedTransform(state, action, ...args) {
        return state
    }
}
