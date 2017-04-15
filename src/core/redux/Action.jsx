import util from '../util'
import {getStoreInstance} from './Store'

let __dispatcher = null
const __actions = {}

export default class Action {
    dispatchable = true
    debug = false
    beforeDispatch(payload) {}
    normalize(payload) {
        if (!payload || !payload.data) payload = this.util.assign({}, {data: payload})
        return this.util.assign({}, payload, {type: this.constructor.name})
    }
    normalizeSearch(results) {
        return {search: results, type: this.constructor.name}
    }
    get util() {return util}
    get store() {return getStoreInstance()}
    getState(name) {return this.store.getState()[`${name}Reducer`]}
    get state() {return this.getState(this.constructor.name)}
    get dispatcher() {return __dispatcher}
    get callback() {return this.__callback}
    set callback(v) {this.__callback = v}
    get fn() {return this.__fn}
    debugFn(payload) {
        console.log(this.constructor.name, 'payload', this.normalize(...arguments))
        console.log(this.constructor.name, 'state', this.state)
        console.log(this.constructor.name, 'callback', this.callback)
    }
    getFn(dispatch) {
        if (!__dispatcher) __dispatcher = dispatch
        if (!this.__fn) this.__fn = (function(payload) {
            if (typeof arguments[arguments.length - 1] == 'function') {
                this.callback = arguments[arguments.length - 1]
            }
            try {
                this.beforeDispatch(...arguments)
                if (this.dispatchable) Action.dispatch(this.normalize(...arguments))
                if (this.callback) this.callback(...arguments)
            }
            catch(e) {console.error(e)}
            if (this.debug) this.debugFn(...arguments)
        }).bind(this)
        return this.__fn
    }
    static actions() {
        const rs = {}
        Object.keys(__actions).map(k => rs[k] = __actions[k].fn)
        return rs
    }
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
    static action(klass) {
        const name = Action.getName(klass)
        if (Object.keys(__actions).indexOf(`execute${name}`) >= 0) {
            return __actions[`execute${name}`]
        }
        return null
    }
    static fn(klass) {
        const action = Action.action(klass)
        if (action) return action.fn
    }
    static instance(klass) {
        const action = Action.action(klass)
        if (action) return action.instance
    }
    static put(klass, dispatch, ownProps) {
        if (!__dispatcher) __dispatcher = dispatch
        const name = Action.getName(klass)
        if (name) {
            let action = Action.action(name)
            if (!action) {
                const instance = new klass()
                __actions[`execute${name}`] = {
                    instance: instance,
                    fn: instance.getFn(__dispatcher),
                }
            }
        }
    }
}
export class LocalSearchAction extends Action {
    dispatchable = false
    searchClass = null
    search = (state) => null
    beforeDispatch(q) {
        if (!this.searchClass) return
        const action = Action.instance(this.searchClass)
        Action.dispatch(action.normalizeSearch(!q ? {} : this.search(this.util.assign({}, action.state), q)))
    }
}
