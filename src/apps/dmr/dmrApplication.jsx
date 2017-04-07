// import './sass/styles.scss'

import React from 'react'
import RoutesApplication from '../../common/applications/RoutesApplication'
import routes from './routes'

export default class DmrApplication extends RoutesApplication {
    get container() {return 'container'}
    get routes() {return routes}
}
