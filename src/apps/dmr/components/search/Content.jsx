import React from 'react'
import Component from '../../../../common/components/Component'
import Connect from '../../redux/Connect'
import ProductsList from './ProductsList'
import InterfaceSystems from './InterfaceSystems'

class Content extends Component {
    get componentClassName() {return `content`}
    render = () => <div className={this.className}>
        <ProductsList/>
    </div>
}

export default (new Connect(Content)).klass
