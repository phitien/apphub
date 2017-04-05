import React from 'react'
import Page from '../../../../common/components/Page'
import DmrConnect from '../../redux/Connect'
import LeftPanel from './LeftPanel'
import Content from './Content'

class SearchPage extends Page {
    children = () => <div className='wrapper'>
        <LeftPanel/>
        <Content/>
    </div>
}

export default (new DmrConnect(SearchPage)).klass
