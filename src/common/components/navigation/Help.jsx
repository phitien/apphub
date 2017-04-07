import React from 'react'
import Component from '../Component'
import DefaultConnect from '../../redux/Connect'

class Help extends Component {
    get componentClassName() {return 'help'}
    children = () => <div className='wrapper'>
        <div className='icon'>
            <i className='material-icons'>help</i>
        </div>
    </div>
    render = () => !this.util.user.isLogged ? null :
        <div className={this.className}>
            {this.children()}
        </div>
}

export default (new DefaultConnect(Help)).klass
