import React from 'react'
import {Style} from '../../../common/components'
import {Connect} from '../redux'

class SidebarLeftCollapseButton extends Style {
    get componentClassName() {return `sidebar-left-collapse-button material-icons`}
    collapseSidebarLeft = () => this.props.executeToggleSidebarLeftAction(true)
    render = () => <i className={this.className}
        onClick={this.collapseSidebarLeft}>chevron_left</i>
}

export default (new Connect(SidebarLeftCollapseButton)).klass
