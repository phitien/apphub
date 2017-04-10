import React from 'react'
import Component from '../../../common/components/Component'
import Connect from '../redux/Connect'

class SidebarRightExpandButton extends Component {
    get componentClassName() {return `sidebar-right-expand-button material-icons`}
    expandSidebarRight = () => this.props.executeToggleSidebarRightAction({data: false})
    render = () => <i className={this.className}
        onClick={this.expandSidebarRight}>chevron_left</i>
}

export default (new Connect(SidebarRightExpandButton)).klass
