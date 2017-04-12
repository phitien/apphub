import util from '../util'
import {getStoreInstance} from './Store'

export default class Reducer {
    get util() {return util}
    get fieldName() {throw `${this.constructor.name}: No fieldName`}
    get defaultState() {return {[this.fieldName]: this.defaultValue}}
    get defaultValue() {return null}
    get store() {return getStoreInstance()}
    get value() {return this.__value}
    transform(state = this.defaultState, action) {
        return `${action.type}Reducer` == this.constructor.name
            ? this.matchedTransform(state, action)
            : this.notMatchedTransform(state, action)
    }
    getData(action) {return action.data}
    matchedTransform(state, action) {
        this.__value = this.getData(action)
        if (this.debug) this.debug.call(this, state, action)
        return this.util.assign({}, this.defaultState, state, {[this.fieldName]: this.value})
    }
    notMatchedTransform(state, action) {
        return state
    }
}
export class ConfigReducer extends Reducer {
    get defaultValue() {return configuration.ui[this.fieldName]}
    getData(action) {return action.data ? action.data : configuration.ui[this.fieldName]}
}
export class TrueReducer extends Reducer {
    get defaultValue() {return true}
}
export class FalseReducer extends Reducer {
    get defaultValue() {return false}
}
