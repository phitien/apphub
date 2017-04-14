import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'
import Version from './Version'

class Footer extends Style {
    get componentClassName() {return 'lightdark-box footer'}
    render = () => <div className={this.className}>
        <Version/>
    </div>
}
export default (new Connect(Footer)).klass
