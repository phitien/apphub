import React from 'react'
import {FlatButton, Paper} from 'material-ui'
import Component from './Component'

export default class Card extends Component {
    get componentClassName() {return 'card'}
    get cmpProps() {
        return this.util.assignDeep(this.defaultProps, this.props)
    }
    get defaultProps() {
        return {
            title: null, subtitle: null,
        }
    }
    header = () => !this.cmpProps.title ? null :
        <div className='card-header'>
            <h3>{this.cmpProps.title}</h3>
            {this.subtitle()}
        </div>
    subtitle = () => !this.cmpProps.subtitle ? null :
        <label>{this.cmpProps.subtitle}</label>
    content = () =>
        <div className='card-content'>
            {this.cmpProps.children}
        </div>
    render = () =>
        <div className={this.className}>
            {this.header()}
            {this.content()}
        </div>
}
