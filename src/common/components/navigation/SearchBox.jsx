import React from 'react'
import Component from '../Component'
import DefaultConnect from '../../redux/Connect'

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
export default (new DefaultConnect(SearchBox)).klass
