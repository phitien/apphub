import {cookie} from '../../core'

export default function(prev, next) {
    cookie.value('route_changed', {prev, next})
    dispatchEvent(new CustomEvent('route_changed', {detail: {prev, next}}))
}
