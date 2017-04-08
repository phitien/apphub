import React from 'react'
import Component from '../Component'
import Connect from '../../redux/Connect'
import Version from './Version'

class Footer extends Component {
    get componentClassName() {return 'lightdark-box footer'}
    render = () => <div className={this.className}>
        <Version/>
    </div>
}
export default (new Connect(Footer)).klass
