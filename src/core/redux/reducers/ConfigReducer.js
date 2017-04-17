import Reducer from './Reducer'

export default class ConfigReducer extends Reducer {
    get defaultValue() {return this.configuration.ui[this.fieldName]}
    normalize(action) {return action.data ? action.data : this.configuration.ui[this.fieldName]}
}
