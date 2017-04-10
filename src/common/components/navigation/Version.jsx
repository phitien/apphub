import React from 'react'
import Component from '../Component'
import Connect from '../../redux/Connect'

class Version extends Component {
    get componentClassName() {return 'version'}
    render = () => <div className={this.className}>
        Version 0.0.1
    </div>
}
export default (new Connect(Version)).klass