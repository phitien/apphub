import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'

class LogoBox extends Style {
    componentClassName = 'logo-box'
    render() {
        return <div className={this.className}>
            <img alt={this.pageInfo.pagename} src={applogo}/>
            <h3>{appname}</h3>
        </div>
    }
}
export default (new Connect(LogoBox)).klass
