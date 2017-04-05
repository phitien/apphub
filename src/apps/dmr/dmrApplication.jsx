// import './sass/styles.scss'

import React from 'react'
import RoutesApplication from '../../common/applications/RoutesApplication'
import reducer from './redux/reducers/reducer'
import routes from './routes'

class DmrApplication extends RoutesApplication {
    get container() {return 'container'}
    get reduxStore() {return this.createStore(reducer)}
    get routes() {return routes}
}

const dmrApplication = new DmrApplication()
dmrApplication.render()
export default dmrApplication
