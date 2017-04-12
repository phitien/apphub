import React from 'react'
import {Component} from '../../../common/components'
import {Connect} from '../redux'
import SidebarRightSearch from './SidebarRightSearch'
import SidebarRightExpandButton from './SidebarRightExpandButton'
import SidebarRightCollapseButton from './SidebarRightCollapseButton'

class SidebarRight extends Component {
    get componentClassName() {return `lightdark-box sidebar-right`}
    render = () => <div className={this.className}>
        {this.props.hideSidebarRight ? <SidebarRightExpandButton/> : <SidebarRightCollapseButton/>}
        {this.props.hideSidebarRight ? null : <SidebarRightSearch/>}
    </div>
}

export default (new Connect(SidebarRight)).klass
