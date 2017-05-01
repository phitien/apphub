import React from 'react'
import ReactDOM from 'react-dom'
import {util, configuration} from '../../core'

export default class Component extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {validationErrors: {}, refresh: false}
        this.init(...args)
    }
    init(...args) {}
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
        if (this.pageLoadedApi) {
            this.util.query(this.pageLoadedApi)
                .success(this.pageLoadedApiSuccess)
                .failure(this.pageLoadedApiFailure)
                .run()
        }
    }
    pageLoadedApiSuccess = (res) => {}
    pageLoadedApiFailure = (res) => {}
    postComponentDidMount() {}
    componentWillUnmount() {this.__mounted = false}
    onRouteEntered = (route, replace) => {}
    onRouteChanged = (prev, next) => {}
    refresh(state) {
        if (this.__mounted) {
            this.setState(state ? state : this.state)
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
    get className() {return `${this.componentClassName} ${this.props.className ? this.props.className : ''}`}
    get route() {return this.util.cookie.read('route_entered').route}
    get pageInfo() {return this.props.pageInfo}
    breadcrumbs = this.props.breadcrumbs
    breadcrumbsActions = this.props.breadcrumbsActions

}
