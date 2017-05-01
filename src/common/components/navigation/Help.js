import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'

class Help extends Style {
    componentClassName = 'help'
    children = () => <div className='wrapper'>
        <i className='material-icons'>help</i>
    </div>
    render = () =>
        <div className={this.className}>
            {this.children()}
        </div>
}

export default (new Connect(Help)).klass
