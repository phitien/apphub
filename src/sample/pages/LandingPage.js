import React from 'react'
import {Connect} from '../redux'
import Page from './Page'

class LandingPage extends Page {
    pageClassName = '{app}-landing-page'
    children = () =>
        <div className='content'>
            <div>Landing page of {appname}</div>
        </div>
}

export default (new Connect(LandingPage)).klass
