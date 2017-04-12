import React from 'react'
import Page from '../../../../common/components/Page'
import Connect from '../../redux/Connect'
import SidebarLeft from '../SidebarLeft'
import SidebarRight from '../SidebarRight'
import Content from './Content'

class ProductsPage extends Page {
    get pageClassName() {
        return `${this.props.hideSidebarLeft ? 'has-sidebar-left-collapsed' : 'has-sidebar-left'} ${this.props.hideSidebarRight ? 'has-sidebar-right-collapsed' : 'has-sidebar-right'}`}
    loadData(id) {
        this.props.executeLoadRootHierarchyAction(id)
        this.props.executeSearchDataElementsAction({id})
    }
    postComponentDidMount() {
        this.props.executeSetDataElementColumnsAction()
        this.props.executeSetListOutputTypesAction()
        this.props.executeSetCurrentOutputModelAction()
        this.loadData(this.route.params.id)
    }
    onRouteChanged = (prev, next) => prev.params.id != next.params.id ? this.loadData(next.params.id) : false
    children = () =>
        <div className='wrapper'>
            <SidebarLeft/>
            <Content/>
            <SidebarRight/>
        </div>
}

export default (new Connect(ProductsPage)).klass
