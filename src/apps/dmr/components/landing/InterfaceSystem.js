import React from 'react'
import {Style} from '../../../../common/components'
import {Connect} from '../../redux'

class InterfaceSystem extends Style {
    get componentClassName() {return 'interface-system'}
    get item() {return this.props.item}
    render = () => <div className={this.className}>
        <div className='title'>{this.item.title}</div>
        <div className='count'>{this.item.count}</div>
    </div>
}

export default (new Connect(InterfaceSystem)).klass
