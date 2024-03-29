import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'
import Menu from '../Menu'

class UserBox extends Style {
    componentClassName = 'user-box'
    get menus() {
        return [{
            title: 'Profile',
        },{
            title: 'Preferences',
        },{
            title: 'Logout',
            onClick: () => this.props.executeUserLogoutAction()
        }]
    }
    children = () => <div className='wrapper'>
        <div className='display-name'>{this.util.user.displayName}</div>
        <i className='material-icons'>person</i>
        <div className='menus'>
            <div className='info'>
                <div className='avatar'></div>
                <div className='name'>{this.util.user.displayName}</div>
                <div className='occupation'>{this.util.user.occupation}</div>
                <div className='department'>{this.util.user.department}</div>
                <div className='email'>{this.util.user.email}</div>
                <div className='last-login'>{this.util.user.lastLogin}</div>
            </div>
            <div className='links'>
                <Menu menus={this.menus}/>
            </div>
        </div>
    </div>
    render = () => !this.util.user.isLogged ? null :
        <div className={this.className}>
            {this.children()}
        </div>
}
export default (new Connect(UserBox)).klass
