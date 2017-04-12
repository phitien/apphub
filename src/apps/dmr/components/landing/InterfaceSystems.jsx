import React from 'react'
import {Component} from '../../../../common/components'
import {Connect} from '../../redux'
import InterfaceSystem from './InterfaceSystem'

class InterfaceSystems extends Component {
    get componentClassName() {return 'interface-systems'}
    get interfaceSystems() {return !this.util.isEmpty(this.props.interfaceSystems) ? this.props.interfaceSystems : []}
    onRouteEntered = (route, replace) =>
        this.props.executeLoadInterfaceSystemsAction()
    render = () => {
        return <div className={this.className}>
            {this.interfaceSystems.map((item,i) => <InterfaceSystem key={i} item={item}/>)}
        </div>
    }
}

export default (new Connect(InterfaceSystems)).klass
