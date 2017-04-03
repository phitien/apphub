import React from 'react'
import Component from '../Component'

export default class LinksHub extends Component {
    get componentClassName() {return 'links-hub'}
    get children() {return !this.util.user.isLogged ? null :
        <div>LinksHub</div>
    }
    render() {
        return <div className={this.className}>
            {this.children}
        </div>
    }
}
