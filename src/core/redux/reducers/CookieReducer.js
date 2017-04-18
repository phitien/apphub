import Reducer from './Reducer'

export default class CookieReducer extends Reducer {
    get defaultValue() {return this.util.cookie.read(this.fieldName)}
    set value(v) {
      this.__value = v
      this.setCookie()
    }
    setCookie() {
      this.util.cookie.value(this.fieldName, this.__value[this.fieldName])
    }
}
