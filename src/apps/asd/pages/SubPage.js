import React from 'react'
import {Connect} from '../redux'
import {default as BasePage} from './Page'

class Page extends BasePage {
    pageClassName = 'asd-sub-page'

    children = () =>
        <div className='content'>
            <div>Sub page of Asd</div>
        </div>
}

export default (new Connect(Page)).klass
