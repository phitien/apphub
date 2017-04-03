import React from 'react'
import Component from '../Component'

export default class UserBox extends Component {
    get mainClassName() {return 'user-box'}
    render() {
        return <div className={this.className}>
            UserBox
        </div>
    }
}
