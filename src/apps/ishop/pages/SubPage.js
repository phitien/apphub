import React from 'react'
import {Connect} from '../redux'
import {default as BasePage} from './Page'

class Page extends BasePage {
    pageClassName = 'ishop-sub-page'

    pageLoadedApi = null
    
    children = () =>
        <div className='content'>
            <div>Sub page of iShop</div>
        </div>
}

export default (new Connect(Page)).klass
