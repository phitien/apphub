import cookie from '../../core/cookie'

const RouteEnter = (next, replace) => {
    cookie.remove('login-required')
    cookie.value('route-params', next.params)
}
export default RouteEnter
