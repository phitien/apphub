import React from 'react'
import {Component} from '../../../common/components'
import {Connect} from '../redux'

class Product extends Component {
    get componentClassName() {return `product`}
    render = () =>
        <div className={this.className}>
        </div>
}

export default (new Connect(Product)).klass
