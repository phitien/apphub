import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'

class Tree extends Component {
    get componentClassName() {return 'tree'}
    get root() {
        if (!this.state.root) this.state.root = this.props.root
        return this.state.root
    }
    get subTree() {return this.props.subTree}
    componentDidMount() {this.props.loadRootTree()}
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.selectedNode && nextProps.subTree) {
            this.traverse(this.state.root, nextProps.subTree)
        }
        return true
    }
    traverse(node, subTree) {
        if (node == this.state.selectedNode && !node.children.length) {
            node.children = subTree
        }
        else {
            node.children.map(n => this.traverse(n, subTree))
        }
    }
    toggleLeftSidebar = () => this.props.toggleLeftSidebar({data: !this.props.hideLeftSidebar})
    toggleNode(node, lv, e) {
        node.collapsed = !node.collapsed
        this.setState(this.state)
    }
    loadSubTree(node, lv, e) {
        e.preventDefault()
        e.stopPropagation()
        this.setState({selectedNode: node})
        this.props.loadSubTree(node, lv)
    }
    tree = (node,lv,i) => <li key={i} className={`node node-lv-${lv}`}>
        <div className='node-name' onClick={this.toggleNode.bind(this, node, lv)}>
            <a onClick={this.loadSubTree.bind(this, node, lv)}>{node.model} ({node.count})</a>
        </div>
        {!node.collapsed && node.children && node.children.length ? <ul>
            {node.children.map((item,i) => this.tree(item,lv+1,i))}
        </ul> : null}
    </li>
    collapsedTree = (node,lv,i) => <li key={i} className={`node node-lv-${lv}`}>
        <div className='node-name' onClick={this.loadSubTree.bind(this, node, lv)}>
            {node.model}
        </div>
        {!node.collapsed && node.children && node.children.length ? <ul>
            {node.children.map((item,i) => this.collapsedTree(item,lv+1,i))}
        </ul> : null}
    </li>
    render = () => <div className={this.className}>
        <ul className='root'>
            {!this.root ? null : (this.props.hideLeftSidebar ? this.collapsedTree(this.root, 0, 0) : this.tree(this.root, 0, 0))}
        </ul>
    </div>
}

export default (new DmrConnect(Tree)).klass
