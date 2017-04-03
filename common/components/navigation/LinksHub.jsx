import React from 'react'
import Component from '../Component'

export default class LinksHub extends Component {
    get mainClassName() {return 'links-hub'}
    render() {
        return <div className={this.className}>
            LinksHub
        </div>
    }
}
