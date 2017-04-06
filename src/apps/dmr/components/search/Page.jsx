import React from 'react'
import Page from '../../../../common/components/Page'
import DmrConnect from '../../redux/Connect'
import LeftPanel from './LeftPanel'
import Content from './Content'

class SearchPage extends Page {
    get pageClassName() {return `${this.props.hideLeftSidebar ? 'has-left-sidebar-collapsed' : 'has-left-sidebar'}`}
    children = () => <div className='wrapper'>
        <LeftPanel/>
        <Content/>
    </div>
}

export default (new DmrConnect(SearchPage)).klass
