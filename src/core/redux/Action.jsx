import util from '../util'
import CONSTANTS from './CONSTANTS'

export default class Action {
    constructor(dispatch, type) {
        this.__dispatcher = dispatch
        this.__type = type ? type : this.constructor.name
        CONSTANTS[this.type] = this.type
    }
    beforeDispatch(payload) {}
    afterDispatch(payload) {}
    getData(payload) {
        return this.util.assign({}, payload, {type: this.type})
    }
    dispatch(payload) {this.dispatcher(this.getData(payload))}
    get util() {return util}
    get type() {return this.__type}
    get dispatcher() {return this.__dispatcher}
    get fn() {
        if (!this.type) throw 'Action has no type'
        return (function(payload) {
            this.beforeDispatch.apply(this, arguments)
            this.dispatch(payload)
            this.afterDispatch.apply(this, arguments)
        }).bind(this)
    }
    static run(action) {
        if (Array.isArray(arguments) && arguments.length) arguments.shift()
        action.fn.apply(action, arguments)
    }
}
