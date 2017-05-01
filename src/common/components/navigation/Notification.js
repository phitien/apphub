import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'

class Notification extends Style {
    componentClassName = 'notification'
    children = () => <div className='wrapper'>
        <i className='material-icons'>people</i>
        <i className='material-icons'>notifications</i>
        <i className='material-icons'>history</i>
        <i className='material-icons'>help</i>
    </div>
    render = () => !this.util.user.isLogged ? null :
        <div className={this.className}>
            {this.children()}
        </div>
}

export default (new Connect(Notification)).klass
