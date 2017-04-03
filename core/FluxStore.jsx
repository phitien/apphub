import {EventEmitter} from 'events'
import {dispatcher} from './Dispatcher'

export default class FluxStore extends EventEmitter {
    get dispatcher() {return dispatcher}
    get constants() {
        return {
            STORECHANGE: 'STORECHANGE'
        }
    }

    constructor() {
        super()
        this.__data = {}
        this.dispatcher.register(this.handler)
        this.init()
    }
    init = () => {}
    emitChange = () => this.emit(this.constants.STORECHANGE)
    addChangeListener = (cb) => this.on(this.constants.STORECHANGE, cb)
    removeChangeListener = (cb) => this.removeListener(this.constants.STORECHANGE, cb)
    prop = (n, v, e) => {
        if (v === undefined) {
            return this.__data[n]
        }
        else {
            this.__data[n] = v
            if (e) this.emitChange()
            return this
        }
    }
    handler = (action) => {
        if (action && action.type) {
            if (action.error) this.errorHandler(action)
            else this.changeHandler(action)
        }
    }
    changeHandler = (action) => {
        const type = action.type.toLowerCase()
        if (this.hasOwnProperty(type)) {
            if (typeof this[type] == 'function') this[type](action.data)
            else this[type] = action.data
        }
        else {
            const prop = type.split('-').pop()
            if (typeof this[prop] != 'undefined') this[prop] = action.data
            else this.manualChangeHandler(action)
        }
    }
    errorHandler = (action) => {}
    manualChangeHandler = (action) => {}
}
