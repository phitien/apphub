import React from 'react'
import {Connect} from '../redux'
import Page from './Page'

class LandingPage extends Page {
    pageClassName = '{appname}-landing-page'
    children = () =>
        <div className='content'>
            <div>Landing page for {APPNAME}</div>
        </div>
}

export default (new Connect(LandingPage)).klass
