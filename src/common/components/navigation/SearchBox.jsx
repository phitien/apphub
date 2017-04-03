import React from 'react'
import Component from '../Component'

export default class SearchBox extends Component {
    get componentClassName() {return 'search-box'}
    get children() {return !this.util.user.isLogged ? null :
        <div>Search box</div>
    }
    render() {
        return <div className={this.className}>
            {this.children}
        </div>
    }
}
