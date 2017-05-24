import React from 'react'
import {Connect} from '../redux'
import {Style} from '../../../common/components'

class FeaturedItem extends Style {
    componentClassName = 'featured-item'

    render = () =>
        <div className={this.className}>

        </div>
}

export default (new Connect(FeaturedItem)).klass
