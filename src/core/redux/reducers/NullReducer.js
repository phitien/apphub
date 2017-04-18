import Reducer from './Reducer'

export default class NullReducer extends Reducer {
    get defaultValue() {return null}
    normalize(action) {return null}
}
