import React from 'react'
import Component from '../Component'

export default class SearchBox extends Component {
    get componentClassName() {return 'search-box'}
    children = () => <div>Search Box</div>
    render = () => !this.util.user.isLogged ? null :
        <div className={this.className}>
            {this.children()}
        </div>
}
