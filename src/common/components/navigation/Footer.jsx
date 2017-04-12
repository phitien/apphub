import React from 'react'
import {Connect} from '../../redux'
import Component from '../Component'
import Version from './Version'

class Footer extends Component {
    get componentClassName() {return 'lightdark-box footer'}
    render = () => <div className={this.className}>
        <Version/>
    </div>
}
export default (new Connect(Footer)).klass
