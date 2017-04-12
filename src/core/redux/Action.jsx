import util from '../util'
import {getStoreInstance} from './Store'

let __dispatcher = null

export default class Action {
    beforeDispatch(payload) {}
    getData(payload) {
        return this.util.assign({}, payload, {type: this.constructor.name})
    }
    get util() {return util}
    get store() {return getStoreInstance()}
    get dispatcher() {return __dispatcher}
    set dispatcher(v) {__dispatcher = !__dispatcher ? v : __dispatcher}
    get callback() {return this.__callback}
    set callback(v) {this.__callback = v}
    getFn(dispatch) {
        this.dispatcher = dispatch
        return (function(payload) {
            if (typeof arguments[arguments.length - 1] == 'function') {
                this.callback = arguments[arguments.length - 1]
            }
            this.beforeDispatch.apply(this, arguments)
            Action.dispatch(this.getData(payload))
            if (this.callback) this.callback(payload)
            if (this.debug) this.debug.call(this, payload)
        }).bind(this)
    }
    static dispatch(payload) {
        __dispatcher(payload)
    }
    static run(klass) {
        const args = []
        if (arguments.length) {
            for (var i=1;i < arguments.length;i++) {
                args.push(arguments[i])
            }
        }
        const action = new klass()
        action.getFn().apply(action, args)
    }
}
