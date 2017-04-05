import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'
import {TextField, RaisedButton} from 'material-ui'

class Search extends Component {
    get componentClassName() {return 'search'}
    toggleLeftSidebar = () => this.props.toggleLeftSidebar({data: !this.props.hideLeftSidebar})
    render = () => this.props.hideLeftSidebar ? <div className={this.className}>
        <i className='material-icons' onClick={this.toggleLeftSidebar}>search</i>
    </div> : <div className={this.className}>
        <i className='material-icons'>arrow_drop_down</i>
        <input type='text' ref={e => this.searchInput = e}
            placeholder='Search'/>
        <i className='material-icons'>search</i>
        <i className='material-icons' onClick={this.toggleLeftSidebar}>chevron_left</i>
    </div>
}

export default (new DmrConnect(Search)).klass
