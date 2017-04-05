import React from 'react'
import Component from '../Component'
import Connect from '../../redux/Connect'

class SearchBox extends Component {
    get componentClassName() {return 'search-box'}
    children = () => <div>Search Box</div>
    render = () => <div className={this.className}>
            {!this.util.user.isLogged ? null :this.children()}
        </div>
}
export default (new Connect(SearchBox)).klass
