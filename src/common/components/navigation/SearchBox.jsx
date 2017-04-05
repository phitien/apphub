import React from 'react'
import Component from '../Component'
import Connect from '../../redux/Connect'

class SearchBox extends Component {
    get componentClassName() {return 'search-box'}
    children = () => <div className='wrapper'>
        <i className='material-icons'>arrow_drop_down</i>
        <input type='text' ref={e => this.searchInput = e}
            placeholder='Search'/>
        <i className='material-icons'>search</i>
    </div>
    render = () => <div className={this.className}>
            {!this.util.user.isLogged ? null :this.children()}
        </div>
}
export default (new Connect(SearchBox)).klass
