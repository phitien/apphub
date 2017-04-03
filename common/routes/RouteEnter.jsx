import cookie from '../../core/Cookie'

export default (next, replace) => {
    cookie.remove('login-required')
    cookie.value('route-params', next.params)
}
