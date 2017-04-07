import React from 'react'
import Component from '../Component'
import DefaultConnect from '../../redux/Connect'

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

export default (new DefaultConnect(Notification)).klass
