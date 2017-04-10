import React from 'react'
import Component from '../../../common/components/Component'
import Connect from '../redux/Connect'
import SidebarRightSearch from './SidebarRightSearch'
import SidebarRightExpandButton from './SidebarRightExpandButton'

class SidebarRight extends Component {
    get componentClassName() {return `lightdark-box sidebar-right`}
    toggleSidebarRight = () => this.props.executeToggleSidebarRightAction({data: !this.props.hideSidebarRight})
    render = () => <div className={this.className}>
        {this.props.hideSidebarRight ? <SidebarRightExpandButton/> : null}
        {this.props.hideSidebarRight ? null : <SidebarRightSearch/>}
    </div>
}

export default (new Connect(SidebarRight)).klass
