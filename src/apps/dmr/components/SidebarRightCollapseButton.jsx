import React from 'react'
import {Component} from '../../../common/components'
import {Connect} from '../redux'

class SidebarRightCollapseButton extends Component {
    get componentClassName() {return `sidebar-right-collapse-button material-icons`}
    collapseSidebarRight = () => this.props.executeToggleSidebarRightAction({data: true})
    render = () => <i className={this.className}
        onClick={this.collapseSidebarRight}>chevron_right</i>
}

export default (new Connect(SidebarRightCollapseButton)).klass
