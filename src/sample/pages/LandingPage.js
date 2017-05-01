import React from 'react'
import {Connect} from '../redux'
import {default as BasePage} from './Page'

class Page extends BasePage {
    pageClassName = '{app}-landing-page'
    children = () =>
        <div className='content'>
            <div>Landing page of {appname}</div>
        </div>
}

export default (new Connect(Page)).klass
