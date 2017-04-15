import util from '../util'
import {getStoreInstance} from './Store'

export default class Reducer {
    get debug() {return this.__debug}
    set debug(v) {this.__debug = v}
    get util() {return util}
    get fieldName() {throw `${this.constructor.name}: No fieldName`}
    get defaultState() {return {
        [this.fieldName]: this.defaultValue,
        [`Search${this.fieldName}Results`]: null
    }}
    get defaultValue() {return null}
    get store() {return getStoreInstance()}
    get value() {return this.__value}
    set value(v) {this.__value = v}
    transform(state = this.defaultState, action) {
        return `${action.type}` == this.constructor.name
        || `${action.type}Reducer` == this.constructor.name
        || `Search${action.type}Reducer` == `Search${this.constructor.name}`
            ? this.matchedTransform(state, action)
            : this.notMatchedTransform(state, action)
    }
    normalize(action) {return action.data}
    normalizeSearch(action) {return action.search}
    debugFn(state, action) {console.log(this.constructor.name, ...arguments)}
    matchedTransform(state, action) {
        if (action.hasOwnProperty('data')) this.value = {[this.fieldName]: this.normalize(action)}
        else if (action.hasOwnProperty('search')) this.value = {[`Search${this.fieldName}Results`]: this.normalizeSearch(action)}
        if (this.debug) this.debugFn(state, action, this.value)
        return this.util.assign({}, this.defaultState, state, this.value)
    }
    notMatchedTransform(state, action) {
        return state
    }
}
export class ConfigReducer extends Reducer {
    get defaultValue() {return configuration.ui[this.fieldName]}
    normalize(action) {return action.data ? action.data : configuration.ui[this.fieldName]}
}
export class TrueReducer extends Reducer {
    get defaultValue() {return true}
}
export class FalseReducer extends Reducer {
    get defaultValue() {return false}
}
