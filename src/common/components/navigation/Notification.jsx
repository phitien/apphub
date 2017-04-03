import React from 'react'
import Component from '../Component'

export default class Notification extends Component {
    get componentClassName() {return 'notification'}
    get children() {return !this.util.user.isLogged ? null :
        <div>Notification</div>
    }
    render() {
        return <div className={this.className}>
            {this.children}
        </div>
    }
}
