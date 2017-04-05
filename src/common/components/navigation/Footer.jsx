import React from 'react'
import Component from '../Component'
import Connect from '../../redux/Connect'

class Footer extends Component {
    get componentClassName() {return 'lightdark-box footer'}
    render = () => <div className={this.className}>
    </div>
}
export default (new Connect(Footer)).klass
