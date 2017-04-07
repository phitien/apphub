import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'
import SidebarRightSearch from './SidebarRightSearch'

class SidebarRight extends Component {
    get componentClassName() {return `lightdark-box sidebar-right`}
    toggleSidebarRight = () => this.props.toggleSidebarRight({data: !this.props.hideSidebarRight})
    render = () => <div className={this.className}
        onMouseOver={this.toggleSidebarRight}
        onMouseOut={this.toggleSidebarRight}
        >
        <SidebarRightSearch/>
    </div>
}

export default (new DmrConnect(SidebarRight)).klass
