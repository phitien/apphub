import React from 'react'
import Component from '../../../common/components/Component'
import Connect from '../redux/Connect'
import Hierarchy from './Hierarchy'
import Product from './Product'
import SidebarLeftSearch from './SidebarLeftSearch'

class SidebarLeft extends Component {
    get componentClassName() {return `lightdark-box sidebar-left`}
    render = () => <div className={this.className}>
        <SidebarLeftSearch/>
        {this.props.sidebarLeftViewName == 'Hierarchy' ? <Hierarchy/> : <Product/>}
    </div>
}

export default (new Connect(SidebarLeft)).klass
