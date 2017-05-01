import React from 'react'
import Style from './Style'

export default class SearchField extends Style {
    componentClassName = 'search-field'
    icon = this.props.icon ? this.props.icon : <i className='material-icons'>search</i>
    iconPosition = this.props.iconPosition == 'start' ? 'start' : 'end'
    placeholder = this.props.placeholder ? this.props.placeholder : 'Search'
    get value() {return this.input.value}
    set value(v) {this.input.value = v}

    onChange = (e) => this.props.onChanged ? this.props.onChanged(e) : false
    render = () =>
        <div className={this.className} style={this.props.style}>
            {this.iconPosition == 'start' ? this.icon : null}
            <input type='text' ref={e => this.input = e} placeholder={this.placeholder}
                onChange={this.onChange}/>
            {this.iconPosition == 'end' ? this.icon : null}
        </div>
}
