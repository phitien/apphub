import React from 'react'
import Page from '../../../../common/components/Page'
import Connect from '../../redux/Connect'
import SidebarLeft from '../SidebarLeft'
import SidebarRight from '../SidebarRight'
import Content from './Content'

class ProductsPage extends Page {
    get pageClassName() {
        return `${this.props.hideSidebarLeft ? 'has-sidebar-left-collapsed' : 'has-sidebar-left'} ${this.props.hideSidebarRight ? 'has-sidebar-right-collapsed' : 'has-sidebar-right'}`}
    componentDidMount() {
        let path = this.props.routeParams.path
        this.props.executeLoadRootHierarchyAction(path)
        this.props.executeSearchDataElementsAction({product: path, path: path})
        addEventListener('url_changed', (e) => {
            if (path = e.detail.next.params.path && this.props.routeParams.path != path) {
                this.props.executeLoadRootHierarchyAction(path)
                this.props.executeSearchDataElementsAction({product: path, path: path})
            }
        }) 
    }
    children = () => <div className='wrapper'>
        <SidebarLeft/>
        <Content/>
        <SidebarRight/>
    </div>
}

export default (new Connect(ProductsPage)).klass
