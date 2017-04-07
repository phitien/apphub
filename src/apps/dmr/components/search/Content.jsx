import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'
import DataElements from './DataElements'
import InterfaceSystems from './InterfaceSystems'

class Content extends Component {
    get componentClassName() {return `content`}
    render = () => <div className={this.className}>
        <InterfaceSystems/>
        <DataElements/>
    </div>
}

export default (new DmrConnect(Content)).klass
