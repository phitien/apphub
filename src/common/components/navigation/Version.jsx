import React from 'react'
import {Connect} from '../../redux'
import Component from '../Component'

class Version extends Component {
    get componentClassName() {return 'version'}
    render = () => <div className={this.className}>
        Version 0.0.1
    </div>
}
export default (new Connect(Version)).klass
