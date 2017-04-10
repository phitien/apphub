import React from 'react'
import Component from '../../../../common/components/Component'
import Connect from '../../redux/Connect'
import BreadCrumbs from '../BreadCrumbs'
import ProductsList from './ProductsList'

class Content extends Component {
    get componentClassName() {return `content`}
    render = () => <div className={this.className}>
        <BreadCrumbs/>
        <ProductsList/>
    </div>
}

export default (new Connect(Content)).klass
