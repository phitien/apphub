import React from 'react'
import {Connect} from '../../redux'
import Page from '../Page'

class LandingPage extends Page {
    children = () => <div>Landing page for DMR</div>
}

export default (new Connect(LandingPage)).klass
