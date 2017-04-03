import './sass/styles.scss'

import RoutesApplication from '../../common/applications/RoutesApplication'
import routes from './routes'

class DmrApplication extends RoutesApplication {
    get container() {return 'container'}
    get routes() {return routes}
}

const dmrApplication = new DmrApplication()
dmrApplication.render()
export default dmrApplication
