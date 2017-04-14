import React from 'react'
import {Link} from 'react-router'
import {Style} from '../../../common/components'
import {Connect} from '../redux'

class Hierarchy extends Style {
    get componentClassName() {return 'hierarchy'}
    get hierarchy() {
        return this.state.hierarchy = this.util.assign(
            {id: null, name: null, template: null, subNodes: [], expanded: true},
            this.props.hierarchy)
    }
    toggleSidebarLeft = () => this.props.executeToggleSidebarLeftAction({data: !this.props.hideSidebarLeft})
    expandNode(node) {
        node.expanded = !node.expanded
        this.state.selectedNode = node
        this.setState(this.state)
        this.props.executeSetCurrentHierarchyAction({data: node})
        this.props.executeLoadSubHierarchyAction({id: node.id})
        this.props.executeSearchDataElementsAction({id: node.id})
    }
    renderIcon = (node, lv) => <i className='material-icons'>{node.expanded ? 'remove' : 'add'}</i>
    renderHierarchy = (node,lv,i) =>
        <li key={i} className={`node node-lv-${lv}`}>
            <div className='node-name' onClick={this.expandNode.bind(this, node)}>
                {this.renderIcon(node, lv)}
                <Link to={`/dmr/products/${node.id}`} className='name'>
                    {node.name} {node.subNodes ? `(${node.subNodes.length})` : ''}
                </Link>
            </div>
            {node.expanded && node.subNodes && node.subNodes.length ? <ul>
                {node.subNodes.map((item,i) => this.renderHierarchy(item,lv+1,i))}
            </ul> : null}
        </li>
    render = () =>
        <div className={this.className}>
            <ul className='hierarchy'>
                {!this.hierarchy ? null : this.renderHierarchy(this.hierarchy, 0, 0)}
            </ul>
        </div>
}

export default (new Connect(Hierarchy)).klass
