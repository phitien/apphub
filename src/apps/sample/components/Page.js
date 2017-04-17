import React from 'react'
import {Page as CommonPage} from '../../../common/components'

export default class Page extends CommonPage {
    get pageClassName() {return `${this.props.hideSidebarLeft ? 'has-sidebar-left-collapsed' : 'has-sidebar-left'} ${this.props.hideSidebarRight ? 'has-sidebar-right-collapsed' : 'has-sidebar-right'}`}
}
