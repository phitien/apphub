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
        addEventListener('url_changed', (e) => {
            if (id = e.detail.next.params.id && this.props.routeParams.id != id) {
                this.props.executeLoadRootHierarchyAction(id)
                this.props.executeSearchDataElementsAction({context: id})
            }
        })
        this.props.executeLoadRootHierarchyAction(this.props.routeParams.id)
        this.props.executeSearchDataElementsAction({context: this.props.routeParams.id})
    }
    children = () => <div className='wrapper'>
        <SidebarLeft/>
        <Content/>
        <SidebarRight/>
    </div>
}

export default (new Connect(ProductsPage)).klass
