import React from 'react'
import {Style} from '../../../common/components'
import {Connect} from '../redux'

class Product extends Style {
    get componentClassName() {return `product`}
    render = () =>
        <div className={this.className}>
        </div>
}

export default (new Connect(Product)).klass
