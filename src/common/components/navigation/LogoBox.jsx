import React from 'react'
import {Connect} from '../../redux'
import Component from '../Component'

class LogoBox extends Component {
    get componentClassName() {return 'logo-box'}
    render() {
        return <div className={this.className}>
            <a>
                <img className='svg-image' alt='Standard Chartered' src='/static/images/standard_chartered_logo_svg.svg'/>
            </a>
            <h3>{this.props.pageTitle}</h3>
        </div>
    }
}
export default (new Connect(LogoBox)).klass
