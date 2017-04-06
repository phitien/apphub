import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'
import List from './List'
import InterfaceSystems from './InterfaceSystems'

class Content extends Component {
    get componentClassName() {return `content`}
    render = () => <div className={this.className}>
        <InterfaceSystems/>
        <List/>
    </div>
}

export default (new DmrConnect(Content)).klass
