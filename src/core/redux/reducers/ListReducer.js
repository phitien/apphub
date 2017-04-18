import Reducer from './Reducer'

export default class ListReducer extends Reducer {
    isList = true
    primaryKey = 'id'
    get defaultValue() {return {}}
    get value() {return this.__value}
    set value(v) {
        const value = v[this.fieldName]
        if (value) {
            const id = value[this.primaryKey]
            this.state[this.fieldName][id] = value
            this.__value = this.util.assign({}, this.state)
        }
        else {
            this.__value = this.state
        }
    }
}
