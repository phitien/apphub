import util from '../util'
import {getStoreInstance} from './Store'

let __dispatcher = null
const __actions = {}

export default class Action {
    get debug() {return this.__debug}
    set debug(v) {this.__debug = v}
    beforeDispatch(payload) {}
    normalize(payload) {
        if (!payload || !payload.data) payload = {data: payload}
        return this.util.assign({}, payload, {type: this.constructor.name})
    }
    get util() {return util}
    get store() {return getStoreInstance()}
    get dispatcher() {return __dispatcher}
    get callback() {return this.__callback}
    set callback(v) {this.__callback = v}
    get fn() {return this.__fn}
    debugFn(payload) {
        console.log(this.constructor.name, 'payload', this.normalize(...arguments))
        console.log(this.constructor.name, 'callback', this.callback)
    }
    getFn(dispatch) {
        if (!__dispatcher) __dispatcher = dispatch
        if (!this.__fn) this.__fn = (function(payload) {
            if (typeof arguments[arguments.length - 1] == 'function') {
                this.callback = arguments[arguments.length - 1]
            }
            if (this.debug) this.debugFn(...arguments)
            this.beforeDispatch(...arguments)
            Action.dispatch(this.normalize(...arguments))
            if (this.callback) this.callback(...arguments)
        }).bind(this)
        return this.__fn
    }
    static actions() {return __actions}
    static dispatch(payload) {
        __dispatcher(payload)
    }
    static getName(klass) {return typeof klass == 'string' ? klass : klass.name}
    static execute(klass, ...args) {
        const name = Action.getName(klass)
        const action = Action.fn(name)
        if (action) {
            action(...args)
        }
        else throw `Action ${$name} is not registerd`
    }
    static fn(klass) {
        const name = Action.getName(klass)
        if (Object.keys(__actions).indexOf(`execute${name}`) >= 0) {
            return __actions[`execute${name}`]
        }
        return null
    }
    static put(klass, dispatch, ownProps) {
        if (!__dispatcher) __dispatcher = dispatch
        const name = Action.getName(klass)
        if (name) {
            let action = Action.fn(name)
            if (!action) {
                __actions[`execute${name}`] = (new klass()).getFn(__dispatcher)
            }
        }
    }
}
