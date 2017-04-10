import React from 'react'
import Component from '../../../common/components/Component'
import Connect from '../redux/Connect'

class SidebarLeftCollapseButton extends Component {
    get componentClassName() {return `sidebar-left-collapse-button material-icons`}
    collapseSidebarLeft = () => this.props.executeToggleSidebarLeftAction({data: true})
    render = () => <i className={this.className}
        onClick={this.collapseSidebarLeft}>chevron_left</i>
}

export default (new Connect(SidebarLeftCollapseButton)).klass
