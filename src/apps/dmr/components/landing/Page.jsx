import React from 'react'
import Page from '../../../../common/components/Page'
import Connect from '../../redux/Connect'

class LandingPage extends Page {
    children = () => <div>Landing page for DMR</div>
}

export default (new Connect(LandingPage)).klass
