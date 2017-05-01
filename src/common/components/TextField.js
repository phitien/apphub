import React from 'react'
import Style from './Style'

export default class TextField extends Style {
    get componentClassName() {return `text-field ${this.props.errorText ? 'error' : ''}`}
    get type() {return this.props.type ? this.props.type : 'text'}
    get defaultValue() {return this.props.defaultValue}
    get value() {return this.input.value}
    set value(v) {this.input.value = v}
    get placeholder() {return this.props.placeholder ? this.props.placeholder : ''}

    error = () => !this.props.errorText ? null :
        <div className='error'>{this.props.errorText}</div>
    render = () =>
        <div className={this.className}>
            <input ref={e => this.input = e} type={this.type} value={this.defaultValue} placeholder={this.placeholder}/>
            {this.error()}
        </div>
}
