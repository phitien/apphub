import {util, configuration} from '../..'
import {getStore} from '../Store'

export default class Reducer {
    get configuration() {return configuration}
    get debug() {return this.__debug}
    set debug(v) {this.__debug = v}
    get util() {return util}
    get fieldName() {throw `${this.constructor.name}: No fieldName`}
    get defaultState() {return {
        [this.fieldName]: this.defaultValue,
        [`Search${this.fieldName}Results`]: null
    }}
    get defaultValue() {return null}
    get store() {return getStore()}
    get value() {return this.__value}
    set value(v) {this.__value = v}
    transform(state = this.defaultState, action, ...args) {
        return `${action.type}` == this.constructor.name
        || `${action.type}Reducer` == this.constructor.name
        || `Search${action.type}Reducer` == `Search${this.constructor.name}`
            ? this.matchedTransform(state, action, ...args)
            : this.notMatchedTransform(state, action, ...args)
    }
    normalize(action) {return action.data}
    normalizeSearch(action) {return action.search}
    debugFn(state, action, ...args) {
        console.log(this.constructor.name)
        console.log('value', this.value)
        console.log('state', state, action, ...args)
        console.log('action', action)
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
