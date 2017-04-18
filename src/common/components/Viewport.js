import React from 'react'
import Style from './Style'

export default class Viewport extends Style {
    get componentClassName() {return 'viewport container-fluid'}
    children = () => this.props.children
    render = () => <div className={this.className}>
        {this.children()}
    </div>
}
