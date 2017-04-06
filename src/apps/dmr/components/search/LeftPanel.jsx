import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'
import Tree from './Tree'
import Search from './Search'

class LeftPanel extends Component {
    get componentClassName() {return `lightdark-box left-sidebar`}
    render = () => <div className={this.className}>
        <Search/>
        <Tree/>
    </div>
}

export default (new DmrConnect(LeftPanel)).klass
