import React from 'react'
import ReactDOM from 'react-dom'
import util from '../../core/util'

export default class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {validationErrors: {}, refresh: false}
        this.refresh = this.refresh.bind(this)
        this.init()
    }
    init() {}
    componentDidMount() {
        this.__mounted = true
        addEventListener('cookie_deleted', this.refresh)
        addEventListener('cookie_updated', this.refresh)
    }
    componentWillUnmount() {this.__mounted = false}
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
    get util() {return util}
    get componentClassName() {return ''}
    get className() {return `${this.componentClassName} ${this.props.className ? this.props.className : ''}`}
}
