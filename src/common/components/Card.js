import React from 'react'
import Style from './Style'

export default class Card extends Style {
    componentClassName = 'card'
    header = () =>
        <div className='card-header' style={{display: !this.props.title ? 'none' : ''}}>
            <h3>{this.props.title}</h3>
            {this.subtitle()}
        </div>
    subtitle = () =>
        <label style={{display: !this.props.subtitle ? 'none' : ''}}>{this.props.subtitle}</label>
    render = () => <div className={this.className}>
        {this.header()}
        <div className='card-content'>
            {this.props.children}
        </div>
    </div>

}
