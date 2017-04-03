import React from 'react'
import Component from '../Component'

export default class LogoBox extends Component {
    get componentClassName() {return 'logo-box'}
    render() {
        return <div className={this.className}>
            <a>
                <img className='svg-image' width='144' height='60' alt='Standard Chartered' src='/public/images/standard_chartered_logo_svg.svg'/>
            </a>
        </div>
    }
}
