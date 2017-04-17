import React from 'react'
import {Connect} from '../../redux'
import Page from '../Page'
import Content from './Content'

class LandingPage extends Page {
    children = () =>
        <Content/>
}

export default (new Connect(LandingPage)).klass
