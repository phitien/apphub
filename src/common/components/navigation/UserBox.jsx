import React from 'react'
import Component from '../Component'

export default class UserBox extends Component {
    get componentClassName() {return 'user-box'}
    get children() {return !this.util.user.isLogged ? null :
        <div>User box</div>
    }
    render() {
        return <div className={this.className}>
            {this.children}
        </div>
    }
}
