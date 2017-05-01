import React from 'react'
import Style from './Style'

export default class Button extends Style {
    componentClassName = 'button'
    label = this.props.label
    onClick = this.props.onClick
    type = this.props.type ? this.props.type : 'button'
    render = () =>
        <button type={this.type} className={this.className} onClick={this.onClick}>
            {this.label}
        </button>
}
