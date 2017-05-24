import React from 'react'
import {Connect} from '../redux'
import {default as BasePage} from './Page'
import {FeaturedItems} from '../components'

class Page extends BasePage {
    pageClassName = 'ishop-landing-page'

    pageLoadedApi = null

    children = () =>
        <div className='content'>
            <FeaturedItems/>
        </div>
}

export default (new Connect(Page)).klass
