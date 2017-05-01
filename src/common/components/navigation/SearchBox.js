import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'

class SearchBox extends Style {
    componentClassName = 'search-box'
    children = () => <div className='wrapper'>
        <input type='text' ref={e => this.searchInput = e} placeholder='Search'/>
    </div>
    render = () => <div className={this.className}>
            {!this.util.user.isLogged ? null :this.children()}
        </div>
}
export default (new Connect(SearchBox)).klass
