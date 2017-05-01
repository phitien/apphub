import React from 'react'
import {Connect} from '../redux'
import Page from './Page'

class SubPage extends Page {
    pageClassName = '{app}-sub-page'
    children = () =>
        <div className='content'>
            <div>Sub page of {appname}</div>
        </div>
}

export default (new Connect(SubPage)).klass
