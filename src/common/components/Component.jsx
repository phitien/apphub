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
    renderMenu(menus, className = '') {return !menus || menus.length <= 0 ? null :
        <ul className={className}>{menus.map((item, i) => {
            let props = item.onClick ? {onClick: item.onClick} : {href: item.url ? item.url : '#'}
            return item.html ? <li key={i} className={`${item.children && item.children.length > 0 ? 'has-children' : ''}`}>{item.html}</li> :
            <li key={i} className={`${item.children && item.children.length > 0 ? 'has-children' : ''}`}>
                <a {...props}>
                    {item.title}
                    {item.children && item.children.length > 0 ? <i className='material-icons'>chevron_right</i> : null}
                </a>
                {!item.description ? null : <div className='description'>{item.description}</div>}
                {this.renderMenu(item.children, 'lightgrey-box')}
            </li>
            })}
        </ul>
    }
    get dom() {return ReactDOM.findDOMNode(this)}
    get util() {return util}
    get componentClassName() {return ''}
    get className() {return `${this.componentClassName} ${this.props.className ? this.props.className : ''}`}
}
