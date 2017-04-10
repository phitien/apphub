import React from 'react'
import Component from '../../../common/components/Component'
import Connect from '../redux/Connect'

class SidebarLeftExpandButton extends Component {
    get componentClassName() {return `sidebar-left-expand-button material-icons`}
    expandSidebarLeft = () => this.props.executeToggleSidebarLeftAction({data: false})
    render = () => <i className={this.className}
        onClick={this.expandSidebarLeft}>chevron_right</i>
}

export default (new Connect(SidebarLeftExpandButton)).klass
