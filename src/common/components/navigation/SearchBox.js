import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'
import TextField from '../TextField'

class SearchBox extends Style {
    componentClassName = 'search-box'
    children = () => <div className='wrapper'>
        <TextField ref={e => this.searchInput = e} placeholder='Search'/>
    </div>
    render = () => <div className={this.className}>
            {!this.util.user.isLogged ? null :this.children()}
        </div>
}
export default (new Connect(SearchBox)).klass
