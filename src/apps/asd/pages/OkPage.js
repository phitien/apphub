import React from 'react'
import {Connect} from '../redux'
import {default as BasePage} from './Page'

class Page extends BasePage {
    pageClassName = 'asd-sub-page'

    pageLoadedApi = '132adas.asd/asdasd'
    
    children = () =>
        <div className='content'>
            <div>Ok page of asd</div>
        </div>
}

export default (new Connect(Page)).klass
