import React from 'react'
import Component from '../Component'

export default class Notification extends Component {
    get componentClassName() {return 'notification'}
    children = () => <div>Notification</div>
    render = () => !this.util.user.isLogged ? null :
        <div className={this.className}>
            {this.children()}
        </div>
}
