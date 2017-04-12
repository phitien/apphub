import React from 'react'
import {Connect} from '../../redux'
import Component from '../Component'

class Notification extends Component {
    get componentClassName() {return 'notification'}
    children = () => <div className='wrapper'>
        <div className='icon'>
            <i className='material-icons'>notifications</i>
        </div>
    </div>
    render = () => !this.util.user.isLogged ? null :
        <div className={this.className}>
            {this.children()}
        </div>
}

export default (new Connect(Notification)).klass
