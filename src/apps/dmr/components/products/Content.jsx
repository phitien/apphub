import React from 'react'
import {Style} from '../../../../common/components'
import {Connect} from '../../redux'
import BreadCrumbs from '../BreadCrumbs'
import ProductsList from './ProductsList'

class Content extends Style {
    get componentClassName() {return `content`}
    render = () => <div className={this.className}>
        <BreadCrumbs/>
        <ProductsList/>
    </div>
}

export default (new Connect(Content)).klass
