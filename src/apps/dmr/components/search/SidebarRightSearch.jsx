import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'

class SidebarRightSearch extends Component {
    get componentClassName() {return `sidebar-right-search`}
    render = () => <div className={this.className}>

    </div>
}

export default (new DmrConnect(SidebarRightSearch)).klass
