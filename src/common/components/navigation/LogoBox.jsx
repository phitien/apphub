import React from 'react'
import Component from '../Component'

export default class LogoBox extends Component {
    get componentClassName() {return 'logo-box'}
    render() {
        return <div className={this.className}>
            <a>
                <img className='svg-image' alt='Standard Chartered' src='/static/images/standard_chartered_logo_svg.svg'/>
            </a>
            <h3>Data Modal Repository</h3>
        </div>
    }
}