import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'
import Detail from './Detail'
import {Dialog, FlatButton} from 'material-ui'

class Tree extends Component {
    get componentClassName() {return 'tree'}
    get root() {return this.props.root}
    closeDetail = () => this.setState({node: null})
    detail() {
        return !this.state || !this.state.node ? null : <Dialog
          title={this.state.node.model}
          actions={[<FlatButton label='Close' primary={true} onClick={this.closeDetail}/>]}
          modal={false}
          open={this.state.node ? true : false}
          onRequestClose={this.closeDetail}
          contentStyle={{width: 1024, maxWidth: 'none'}}
          autoScrollBodyContent={true}
        >
          <Detail node={this.state.node}/>
        </Dialog>
    }
    componentDidMount() {this.props.loadRoot()}
    toggleLeftSidebar = () => this.props.toggleLeftSidebar({data: !this.props.hideLeftSidebar})
    toggleNode(node, e) {
        node.collapsed = !node.collapsed
        this.setState(this.state)
    }
    openDetail(node, e) {
        e.preventDefault()
        e.stopPropagation()
        this.setState({node})
    }
    tree = (node,i) => {
        return <li key={i} className='node'>
            <div className='node-name' onClick={this.toggleNode.bind(this, node)}>
                <a onClick={this.openDetail.bind(this, node)}>{node.model} ({node.children.length})</a>
            </div>
            {!node.collapsed && node.children && node.children.length ? <ul>
                {node.children.map((item,i) => this.tree(item,i))}
            </ul> : null}
        </li>
    }
    collapsedTree = (node,i) => <li key={i} className='node'>
        <div className='node-name' onClick={this.openDetail.bind(this, node)}>
            {node.model}
        </div>
        {!node.collapsed && node.children && node.children.length ? <ul>
            {node.children.map((item,i) => this.collapsedTree(item,i))}
        </ul> : null}
    </li>
    render = () => <div className={this.className}>
        <ul>
            {!this.root ? null : (this.props.hideLeftSidebar ? this.collapsedTree(this.root, 0) : this.tree(this.root, 0))}
        </ul>
        {this.detail()}
    </div>
}

export default (new DmrConnect(Tree)).klass
