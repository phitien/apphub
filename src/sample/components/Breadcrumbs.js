import React from 'react'
import Link from 'react-router'
import {Breadcrumbs as CommonBreadcrumbs} from '../../../common/components'
import {Connect} from '../redux'

class Breadcrumbs extends CommonBreadcrumbs {
}

export default (new Connect(Breadcrumbs)).klass
