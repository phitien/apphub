import util from '../util'
import {getStoreInstance} from './Store'

export default class Reducer {
    get debug() {return this.__debug}
    set debug(v) {this.__debug = v}
    get util() {return util}
    get fieldName() {throw `${this.constructor.name}: No fieldName`}
    get defaultState() {return {[this.fieldName]: this.defaultValue}}
    get defaultValue() {return null}
    get store() {return getStoreInstance()}
    get value() {return this.__value}
    set value(v) {this.__value = v}
    transform(state = this.defaultState, action) {
        return `${action.type}Reducer` == this.constructor.name
            ? this.matchedTransform(state, action)
            : this.notMatchedTransform(state, action)
    }
    normalize(action) {return action.data}
    debugFn(state, action) {console.log(this.constructor.name, state, action, this.value)}
    matchedTransform(state, action) {
        if (!action.data) action.data = action
        this.value = this.normalize(action)
        if (this.debug) this.debugFn(state, action)
        return this.util.assign({}, this.defaultState, state, {[this.fieldName]: this.value})
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
