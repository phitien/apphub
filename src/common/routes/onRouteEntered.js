import {cookie} from '../../core'

export default function(route, replace) {
    cookie.value('route_entered', {route, replace})
    dispatchEvent(new CustomEvent('route_entered', {detail: {route, replace}}))
}
