import React from 'react'
import {Connect} from '../../redux'
import SidebarLeft from '../SidebarLeft'
import SidebarRight from '../SidebarRight'
import Page from '../Page'
import Content from './Content'

class ProductsPage extends Page {
    loadData(id) {
        this.props.executeLoadRootHierarchyAction(id)
        this.props.executeSearchDataElementsAction({id})
    }
    postComponentDidMount() {
        this.props.executeSetDataElementColumnsAction()
        this.props.executeSetListOutputTypesAction()
        this.props.executeSetCurrentOutputTypeAction()
        this.props.executeSetListSourceSystemsAction()
        this.props.executeSetCurrentSourceSystemAction()
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
