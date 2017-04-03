import cookie from '../../core/Cookie'

export default (next, replace) => {
    cookie.value('login-required', true)
    cookie.value('route-params', next.params)
}
