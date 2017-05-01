import React from 'react'
import {Link} from 'react-router'
import {Connect} from '../../redux'
import Style from '../Style'

class LogoBox extends Style {
    componentClassName = 'logo-box'

    children = () => <a className='wrapper' href='/'>
        <img src={this.configuration.applogo}/>
        <h3>{this.configuration.appname}</h3>
    </a>
    render = () => {
        return <div className={this.className}>
            {this.children()}
        </div>
    }
}
export default (new Connect(LogoBox)).klass
