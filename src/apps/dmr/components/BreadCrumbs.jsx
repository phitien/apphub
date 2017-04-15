import React from 'react'
import Link from 'react-router'
import {Checkbox} from 'material-ui'
import {Breadcrumbs as CommonBreadcrumbs} from '../../../common/components'
import {Connect} from '../redux'

class Breadcrumbs extends CommonBreadcrumbs {
    get extra() {return <Checkbox className='switch-view' title='Switch view' label='View' labelPosition='left'
        checkedIcon={<i className='material-icons'>ac_unit</i>}
        uncheckedIcon={<i className='material-icons'>grid_on</i>}
      />}
}

export default (new Connect(Breadcrumbs)).klass
