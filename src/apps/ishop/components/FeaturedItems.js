import React from 'react'
import {Connect} from '../redux'
import {Style} from '../../../common/components'
import FeaturedItem from './FeaturedItem'

class FeaturedItems extends Style {
    componentClassName = 'featured-items'

    get items() {return this.props.featuredItems ? this.props.featuredItems : []}
    render = () =>
        <div className={this.className}>
            {this.items.map((item,i) => <FeaturedItem key={i} data={item}/>)}
        </div>
}

export default (new Connect(FeaturedItems)).klass
