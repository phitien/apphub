import React from 'react'
import Component from './Component'

export default class Page extends Component {
    get componentClassName() {return `container-fluid page`}
    get children() {return this.props.children}
    get modal() {return this.props.modal}
    render() {
        return <div className={this.className}>
            {this.children}
            {this.modal}
        </div>
    }
}
