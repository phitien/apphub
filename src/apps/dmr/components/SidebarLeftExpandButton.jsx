import React from 'react'
import {Style} from '../../../common/components'
import {Connect} from '../redux'

class SidebarLeftExpandButton extends Style {
    get componentClassName() {return `sidebar-left-expand-button material-icons`}
    expandSidebarLeft = () => this.props.executeToggleSidebarLeftAction({data: false})
    render = () => <i className={this.className}
        onClick={this.expandSidebarLeft}>chevron_right</i>
}

export default (new Connect(SidebarLeftExpandButton)).klass
