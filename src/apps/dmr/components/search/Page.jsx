import React from 'react'
import Page from '../../../../common/components/Page'
import DmrConnect from '../../redux/Connect'
import LeftPanel from './LeftPanel'

class SearchPage extends Page {
    children = () => <div className='wrapper'>
        <LeftPanel/>
    </div>
}

export default (new DmrConnect(SearchPage)).klass
