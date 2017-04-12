import React from 'react'
import Page from '../../../../common/components/Page'
import Connect from '../../redux/Connect'
import SidebarLeft from '../SidebarLeft'
import SidebarRight from '../SidebarRight'
import Content from './Content'

class ProductPage extends Page {
    get pageClassName() {
        return `${this.props.hideSidebarLeft ? 'has-sidebar-left-collapsed' : 'has-sidebar-left'} ${this.props.hideSidebarRight ? 'has-sidebar-right-collapsed' : 'has-sidebar-right'}`}
    onRouteEntered = (route, replace) =>
        this.props.executeLoadRootHierarchyAction({product: this.props.routeParams.path})
    children = () => <div className='wrapper'>
        <SidebarLeft/>
        <Content/>
        <SidebarRight/>
    </div>
}

export default (new Connect(ProductPage)).klass
