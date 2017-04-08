import React from 'react'
import RoutesApplication from '../../common/applications/RoutesApplication'
import routes from './routes'

export default class Application extends RoutesApplication {
    get container() {return 'container'}
    get routes() {return routes}
}
