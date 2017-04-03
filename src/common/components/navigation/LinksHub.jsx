import React from 'react'
import Component from '../Component'

export default class LinksHub extends Component {
    get componentClassName() {return 'links-hub'}
    children = () => <div>Links Hub</div>
    render = () => !this.util.user.isLogged ? null :
        <div className={this.className}>
            {this.children()}
        </div>
}
