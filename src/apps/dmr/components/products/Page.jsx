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
        const load = (path) => {
            this.props.executeLoadRootHierarchyAction(path)
            this.props.executeSearchDataElementsAction({product: path, path: path})
        }
        load(this.util.queries.path)
        addEventListener('url_changed', (e) => {
            let oldPath = this.util.extractPairs(e.detail.prev.location.search).path
            let newPath = this.util.extractPairs(e.detail.next.location.search).path
            if (newPath != oldPath) {
                load(newPath)
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
