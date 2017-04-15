import React from 'react'
import {Style} from '../../../../common/components'
import {Connect} from '../../redux'
import Breadcrumbs from '../Breadcrumbs'

class Content extends Style {
    get componentClassName() {return `content`}
    render = () => <div className={this.className}>
        <Breadcrumbs/>
        <div>Landing page for {APPNAME}</div>
    </div>
}

export default (new Connect(Content)).klass
