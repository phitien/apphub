import React from 'react'
import Component from '../../../../common/components/Component'
import Connect from '../../redux/Connect'

class Product extends Component {
    get componentClassName() {return `product`}
    render = () => <div className={this.className}>
    </div>
}

export default (new Connect(Product)).klass
