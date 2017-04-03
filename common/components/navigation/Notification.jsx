import React from 'react'
import Component from '../Component'

export default class Notification extends Component {
    get mainClassName() {return 'notification'}
    render() {
        return <div className={this.className}>
            Notification
        </div>
    }
}
