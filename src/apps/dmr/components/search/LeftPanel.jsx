import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'

class LeftPanel extends Component {
    get root() {return this.props.root}
    init = () => this.state.expanded = true
    componentDidMount() {this.props.loadRoot()}
    tree = (node,i) => <li key={i} className='node'>
        <div className='node-name'>{node.modal}</div>
        {node.children && node.children.length ? <ul>
            {node.children.map((item,i) => this.tree(item,i))}
        </ul> : null}
    </li>
    render = () => <ul className='tree'>
        {this.root ? this.tree(this.root, 0) : null}
    </ul>
}

export default (new DmrConnect(LeftPanel)).klass
