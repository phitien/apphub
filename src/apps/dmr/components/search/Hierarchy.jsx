import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'

class Hierarchy extends Component {
    get componentClassName() {return 'hierarchy'}
    get rootHierarchy() {
        return this.state.rootHierarchy = this.util.assign(
            {id: null, name: null, template: null, subNodes: [], expanded: true},
            this.props.rootHierarchy)
    }
    get subHierarchy() {return this.props.subHierarchy}
    componentDidMount() {if (!this.props.rootHierarchy) this.props.loadRootHierarchy()}
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.selectedNode && nextProps.subHierarchy) {
            this.traverse(this.state.rootHierarchy, nextProps.subHierarchy)
        }
        return true
    }
    traverse(node, subHierarchy) {
        if (node == this.state.selectedNode && subHierarchy.id == node.id) {
            this.util.assign(node, subHierarchy, {expanded: !subHierarchy.subNodes || !subHierarchy.subNodes.length ? false : !node.expanded})
        }
        else if (node.subNodes) {
            node.subNodes.map(n => this.traverse(n, subHierarchy))
        }
    }
    toggleSidebarLeft = () => this.props.toggleSidebarLeft({data: !this.props.hideSidebarLeft})
    loadSubHierarchy(node, lv, e) {
        e.preventDefault()
        e.stopPropagation()
        this.state.selectedNode = node
        this.props.loadSubHierarchy(node, lv)
    }
    loadHierarchyDetail(node, lv, e) {
        e.preventDefault()
        e.stopPropagation()
        this.state.selectedNode = node
        this.props.searchDataElements(node)
    }
    canExpand = (node) => true
    renderIcon = (node, lv) => {
        return <i className='material-icons' onClick={this.loadSubHierarchy.bind(this, node, lv)}>{!this.canExpand(node) ? 'remove' : node.expanded ? 'remove' : 'add'}</i>
    }
    renderHierarchy = (node,lv,i) => <li key={i} className={`node node-lv-${lv}`}>
        <div className='node-name'>
            {this.renderIcon(node, lv)}
            <a onClick={this.loadHierarchyDetail.bind(this, node, lv)}>{node.name} {node.subNodes ? `(${node.subNodes.length})` : ''}</a>
        </div>
        {node.expanded && node.subNodes && node.subNodes.length ? <ul>
            {node.subNodes.map((item,i) => this.renderHierarchy(item,lv+1,i))}
        </ul> : null}
    </li>
    render = () => <div className={this.className}>
        <ul className='hierarchy'>
            {!this.rootHierarchy ? null : this.renderHierarchy(this.rootHierarchy, 0, 0)}
        </ul>
    </div>
}

export default (new DmrConnect(Hierarchy)).klass
