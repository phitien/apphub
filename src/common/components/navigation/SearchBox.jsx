import React from 'react'
import {Connect} from '../../redux'
import Component from '../Component'

class SearchBox extends Component {
    get componentClassName() {return 'search-box'}
    children = () => <div className='wrapper'>
        <input type='text' ref={e => this.searchInput = e}
            placeholder='Search'/>
    </div>
    render = () => <div className={this.className}>
            {!this.util.user.isLogged ? null :this.children()}
        </div>
}
export default (new Connect(SearchBox)).klass
