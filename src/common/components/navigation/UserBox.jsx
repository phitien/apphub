import React from 'react'
import Component from '../Component'
import Connect from '../../redux/Connect'

class UserBox extends Component {
    get componentClassName() {return 'user-box'}
    get menus() {return [{
        html: <div className='lightdark-box user-info'>
            <div className='display-name'>{this.util.user.displayName}</div>
            <div className='email'>({this.util.user.email})</div>
        </div>
    },{
        title: 'Logout',
        onClick: () => this.props.userLogout()
    }]}
    children = () => <div className='wrapper'>
        <div className='icon'>
            <div className='user-info'>
                <div className='display-name'>{this.util.user.displayName}</div>
            </div>
            <i className='material-icons'>person</i>
        </div>
        {this.renderMenu(this.menus, 'lightgrey-box menus')}
    </div>
    render = () => !this.util.user.isLogged ? null :
        <div className={this.className}>
            {this.children()}
        </div>
}
export default (new Connect(UserBox)).klass
