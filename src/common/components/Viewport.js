import React from 'react'
import Style from './Style'

export default class Viewport extends Style {
    componentClassName = 'container viewport'
    children = () => this.props.children
    render = () => <div className={this.className}>
        {this.children()}
    </div>
}
