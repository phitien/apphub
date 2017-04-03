import cookie from '../../core/cookie'

const RouteEnterLoginRequired = (next, replace) => {
    cookie.value('login-required', true)
    cookie.value('route-params', next.params)
}
export default RouteEnterLoginRequired
