import React from 'react'
import {Link} from 'react-router'
import {Style} from '../../../common/components'
import {Connect} from '../redux'

class Hierarchy extends Style {
    get componentClassName() {return 'hierarchy'}
    get isSearching() {return !this.util.isEmpty(this.props.SearchhierarchyResults)}
    get search() {return this.isSearching ? this.props.SearchhierarchyResults.map(n => n.id) : []}
    get hierarchy() {
        return this.util.assign(
            {id: null, name: null, template: null, subNodes: [], expanded: true},
            this.props.hierarchy
        )
    }
    shouldShowNode = (node) => {
        if (!node.id) return true
        if (this.isSearching) {
            const search = this.search
            if (this.util.isEmpty(search)) return true
            if (search.indexOf(node.id) < 0) return false
        }
        return true
    }
    shouldExpanNode = (node) => node.expanded || this.isSearching
    canExpanNode = (node) => node.subNodes && node.subNodes.length
    expandNode(node) {
        node.expanded = !node.expanded
        this.state.selectedNode = node
        this.setState(this.state)
        this.props.executeSetCurrentHierarchyAction(node)
        this.props.executeSearchDataElementsAction({id: node.id})
    }
    renderIcon = (node, lv) => <i className='material-icons'>{this.shouldExpanNode(node) ? 'remove' : 'add'}</i>
    renderHierarchy = (node,lv,i) =>
    !this.shouldShowNode(node) ? null :
        <li key={i} className={`node node-lv-${lv} ${node.expanded ? 'expanded' : 'collapsed'} ${this.isSearching ? `${node.marked ? 'marked' : 'unmarked'}` : ''}`}>
            <div className='node-name' onClick={this.expandNode.bind(this, node)}>
                {this.renderIcon(node, lv)}
                <Link to={`/dmr/products/${node.id}`} className='name'>
                    {node.name} {node.subNodes ? `(${node.subNodes.length})` : ''}
                </Link>
            </div>
            <ul>
                {!node.subNodes ? null : node.subNodes.map((item,i) => this.renderHierarchy(item,lv+1,i))}
            </ul>
        </li>
    render = () =>
        <div className={this.className}>
            <ul className='hierarchy'>
                {this.hierarchy ? this.renderHierarchy(this.hierarchy, 0, 0) : null}
            </ul>
        </div>
}

export default (new Connect(Hierarchy)).klass
