import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'

class LogoBox extends Style {
    componentClassName = 'logo-box'
    render() {
        return <div className={this.className}>
            <img alt={this.pageInfo.appname} src={this.pageInfo.applogo}/>
            <h3>{this.configuration.appname}</h3>
        </div>
    }
}
export default (new Connect(LogoBox)).klass
