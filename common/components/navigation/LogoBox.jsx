import React from 'react'
import Component from '../Component'

export default class LogoBox extends Component {
    get mainClassName() {return 'logo-box'}
    render() {
        return <div className={this.className}>
            LogoBox
        </div>
    }
}
