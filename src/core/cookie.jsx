import cookie from 'react-cookie'

class Cookie {
    value = (name, value, opts) => {
        if (value === undefined) {
            return cookie.load(name)
        }
        else if (value === null) {
            cookie.remove(name, opts)
            dispatchEvent(new CustomEvent('cookie_deleted', {name}))
        }
        else {
            cookie.save(name, value, opts)
            dispatchEvent(new CustomEvent('cookie_updated', {name, value}))
         }
    }
    remove = (name, opts) => this.value(name, null, opts)
    read = (name) => this.value(name)
}
export default new Cookie()
