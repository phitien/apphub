import React from 'react'
import {TextField, RaisedButton, IconMenu, MenuItem, IconButton} from 'material-ui'
import {Style} from '../../../common/components'
import {Connect} from '../redux'
import SidebarLeftCollapseButton from './SidebarLeftCollapseButton'

class SidebarLeftSearch extends Style {
    get componentClassName() {return 'sidebar-left-search'}
    get views() {return [
        {title: 'Logical Data Hierarchy', value: 'Hierarchy'},
        {title: 'Business Product', value: 'Product'}
    ]}
    switchSidebarLeftView(view) {
        this.props.executeSwitchSidebarLeftViewAction(view)
    }
    renderSwitchViewMenu = () => <IconMenu
        iconButtonElement={<IconButton style={{padding: '0', color: '#ffffff', width: 24}}><i className='material-icons'>more_vert</i></IconButton>}>
        {this.views.map((item,i) => <MenuItem key={i} primaryText={item.title} onClick={this.switchSidebarLeftView.bind(this, item.value)}/>)}
    </IconMenu>
    render = () => <div className={this.className}>
        <SidebarLeftCollapseButton/>
        <input type='text' ref={e => this.searchInput = e}
            onChange={(e) => this.props.executeSearchHierarchyAction(e.target.value)}
            placeholder='Search'/>
        {this.renderSwitchViewMenu()}
    </div>
}

export default (new Connect(SidebarLeftSearch)).klass
