import React from 'react'
import Component from '../Component'

export default class UserBox extends Component {
    get componentClassName() {return 'user-box'}
    children = () => <div>User Box</div>
    render = () => !this.util.user.isLogged ? null :
        <div className={this.className}>
            {this.children()}
        </div>
}
