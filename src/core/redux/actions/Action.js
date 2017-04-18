import {util, configuration} from '../..'
import {getStore} from '../Store'

let __dispatcher = null
const __actions = {}

function normalize(name, payload, ...args) {
    if (!payload || !payload.hasOwnProperty('data'))
        payload = util.assign({}, {data: payload})
    return util.assign({extra: args}, payload, {type: name})
}
function normalizeSearch(name, results, ...args) {return {search: results, type: name}}

export default class Action {
    dispatchable = true
    debug = false
    preProcess(payload, ...args) {}
    beforeDispatch(payload, ...args) {}
    normalize(payload, ...args) {
        if (!payload || !payload.hasOwnProperty('data'))
            payload = this.util.assign({}, {data: payload})
        return normalize(this.name, payload, ...args)
    }
    normalizeSearch(results) {return normalizeSearch(this.name, ...arguments)}
    getState(name) {return this.store.getState()[`${name}Reducer`]}
    getStates() {
      const states = this.store.getState()
      const newStates = {}
      Object.keys(states).map(k => this.util.assign(newStates, states[k]))
      return newStates
    }
    debugFn(payload, ...args) {}
    dispatch(payload, ...args) {this.dispatcher(payload, ...args)}
    get name() {return this.constructor.name}
    get configuration() {return configuration}
    get util() {return util}
    get store() {return getStore()}
    get state() {return this.getState(this.name)}
    get dispatcher() {return __dispatcher}
    get fn() {return this.__fn}
    getFn(dispatch, ownProps, ...args) {
        const me = this
        if (!__dispatcher) __dispatcher = dispatch
        if (!this.__fn) this.__fn = (function(payload, ...argus) {
            me.preProcess(payload, ...argus)
            if (me.beforeDispatch(payload, ...argus) !== false) {
                if (me.dispatchable) me.dispatch(me.normalize(payload, ...argus))
            }
            if (me.debug) me.debugFn(payload, ...argus)
        }).bind(this)
        return this.__fn
    }
    static actions() {
        const rs = {}
        Object.keys(__actions).map(k => rs[k] = __actions[k].fn)
        return rs
    }
    static getName(klass) {if (klass) return typeof klass == 'string' ? klass : klass.name}
    static execute(klass, payload, ...args) {
        const name = Action.getName(klass)
        const action = Action.fn(name)
        if (action) action(payload, ...args)
        else if(__dispatcher) {
          __dispatcher(normalize(`${name}Reducer`, payload, ...args))
        }
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
    static put(klass, dispatch, ownProps, ...args) {
        if (!__dispatcher) __dispatcher = dispatch
        const name = Action.getName(klass)
        if (name) {
            let action = Action.action(name)
            if (!action) {
                const instance = new klass()
                if (instance.isApiAction) instance.runSaga()
                __actions[`execute${name}`] = {
                    instance: instance,
                    fn: instance.getFn(__dispatcher, ownProps, ...args),
                }
            }
        }
    }
}
