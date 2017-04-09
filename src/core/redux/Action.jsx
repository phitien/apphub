import util from '../util'
import {getStoreInstance} from './Store'

let __dispatcher = null

export default class Action {
    beforeDispatch(payload) {}
    afterDispatch(payload) {}
    getData(payload) {
        return this.util.assign({}, payload, {type: this.constructor.name})
    }
    get util() {return util}
    get store() {return getStoreInstance()}
    get dispatcher() {return __dispatcher}
    set dispatcher(v) {__dispatcher = !__dispatcher ? v : __dispatcher}
    getFn(dispatch) {
        this.dispatcher = dispatch
        return (function(payload) {
            this.beforeDispatch.apply(this, arguments)
            Action.dispatch(this.getData(payload))
            this.afterDispatch.apply(this, arguments)
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
