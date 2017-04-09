import React from 'react'
import Component from '../../../common/components/Component'
import Connect from '../redux/Connect'
import {Link} from 'react-router'

class Hierarchy extends Component {
    get componentClassName() {return 'hierarchy'}
    get rootHierarchy() {
        return this.state.rootHierarchy = this.util.assign(
            {id: null, name: null, template: null, subNodes: [], expanded: true},
            this.props.rootHierarchy)
    }
    get subHierarchy() {return this.props.subHierarchy}
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
    toggleSidebarLeft = () => this.props.executeToggleSidebarLeftAction({data: !this.props.hideSidebarLeft})
    canExpand = (node) => true
    renderIcon = (node, lv) => {
        return <i className='material-icons'>{!this.canExpand(node) ? 'remove' : node.expanded ? 'remove' : 'add'}</i>
    }
    renderHierarchy = (node,lv,i) => <li key={i} className={`node node-lv-${lv}`}>
        <div className='node-name'>
            {this.renderIcon(node, lv)}
            <Link to={`/dmr/products/${node.id}`} className='name'>
                {node.name} {node.subNodes ? `(${node.subNodes.length})` : ''}
            </Link>
            <Link to={`/dmr/product/${node.id}`} className='open'>
                <i className='material-icons' title='Open'>get_app</i>
            </Link>
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

export default (new Connect(Hierarchy)).klass
