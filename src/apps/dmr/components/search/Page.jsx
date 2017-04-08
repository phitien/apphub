import React from 'react'
import Page from '../../../../common/components/Page'
import Connect from '../../redux/Connect'
import SidebarLeft from './SidebarLeft'
import Content from './Content'
import SidebarRight from './SidebarRight'

class SearchPage extends Page {
    get pageClassName() {
        return `${this.props.hideSidebarLeft ? 'has-sidebar-left-collapsed' : 'has-sidebar-left'} ${this.props.hideSidebarRight ? 'has-sidebar-right-collapsed' : 'has-sidebar-right'}`}
    children = () => <div className='wrapper'>
        <SidebarLeft/>
        <Content/>
        <SidebarRight/>
    </div>
}

export default (new Connect(SearchPage)).klass
