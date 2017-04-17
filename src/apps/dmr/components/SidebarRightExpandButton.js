import React from 'react'
import {Style} from '../../../common/components'
import {Connect} from '../redux'

class SidebarRightExpandButton extends Style {
    get componentClassName() {return `sidebar-right-expand-button material-icons`}
    expandSidebarRight = () => this.props.executeToggleSidebarRightAction(false)
    render = () => <i className={this.className}
        onClick={this.expandSidebarRight}>chevron_left</i>
}

export default (new Connect(SidebarRightExpandButton)).klass
