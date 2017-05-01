import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'

class LogoBox extends Style {
    componentClassName = 'logo-box'

    children = () => <div className='wrapper'>
        <img src={this.configuration.applogo}/>
        <h3>{this.configuration.appname}</h3>
    </div>
    render = () => {
        return <div className={this.className}>
            {this.children()}
        </div>
    }
}
export default (new Connect(LogoBox)).klass
