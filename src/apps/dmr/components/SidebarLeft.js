import React from 'react'
import {Style} from '../../../common/components'
import {Connect} from '../redux'
import Hierarchy from './Hierarchy'
import Product from './Product'
import SidebarLeftSearch from './SidebarLeftSearch'
import SidebarLeftExpandButton from './SidebarLeftExpandButton'

class SidebarLeft extends Style {
    get componentClassName() {return `lightdark-box sidebar-left`}
    render = () => <div className={this.className}>
        {this.props.hideSidebarLeft ? <SidebarLeftExpandButton/> : null}
        {this.props.hideSidebarLeft ? null : <SidebarLeftSearch/>}
        {this.props.sidebarLeftViewName == 'Hierarchy' ? <Hierarchy/> : <Product/>}
    </div>
}

export default (new Connect(SidebarLeft)).klass
