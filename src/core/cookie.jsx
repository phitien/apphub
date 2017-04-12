import cookie from 'react-cookie'
import assign from 'object-assign'

class Cookie {
    value = (name, value, opts) => {
        if (value === undefined) {
            return cookie.load(name)
        }
        else if (value === null) {
            cookie.remove(name, assign({ path: '/' }, opts))
            dispatchEvent(new CustomEvent('cookie_deleted', {detail: {name}}))
        }
        else {
            cookie.save(name, value, assign({ path: '/' }, opts))
            dispatchEvent(new CustomEvent('cookie_updated', {detail: {name, value}}))
         }
    }
    remove = (name, opts) => this.value(name, null, opts)
    read = (name) => this.value(name)
}
export default new Cookie()
