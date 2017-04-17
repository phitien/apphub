import React from 'react'
import ReactDOM from 'react-dom'
import {util, configuration} from '../../core'

export default class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {validationErrors: {}, refresh: false}
        this.init()
    }
    init() {}
    componentDidMount() {
        this.__mounted = true
        addEventListener('global_cookie_deleted', this.refresh.bind(this))
        addEventListener('global_cookie_updated', this.refresh.bind(this))
        addEventListener('global_route_entered', (e) => {
            const {route, replace} = e.detail
            this.setState({pageRoute: route})
            this.onRouteEntered(route, replace)
        })
        addEventListener('global_route_changed', (e) => {
            const {prev, next} = e.detail
            this.onRouteChanged(prev, next)
        })
        this.postComponentDidMount()
    }
    postComponentDidMount() {}
    componentWillUnmount() {this.__mounted = false}
    onRouteEntered = (route, replace) => {}
    onRouteChanged = (prev, next) => {}
    refresh() {
        if (this.__mounted) {
            this.setState(this.state)
        }
    }
    setError(field, msg) {
        this.state.validationErrors[field] = msg
        this.setState(this.state)
        return false
    }
    removeError(field) {
        this.state.validationErrors[field] = null
        this.setState(this.state)
        return true
    }
    get dom() {return ReactDOM.findDOMNode(this)}
    get configuration() {return configuration}
    get util() {return util}
    get componentClassName() {return ''}
    get className() {return `${this.componentClassName} ${this.props.className ? this.props.className : ''}`}
    get route() {return this.util.cookie.read('route_entered').route}
}
