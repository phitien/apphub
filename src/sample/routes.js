import {onRouteEntered, onRouteChanged} from '../../common/routes'
import * as pages from './pages'
import Viewport from './Viewport'
import conf from './conf'

const subRoutes = [
{path: conf.apppath + '/sub', component: pages.SubPage, onChange: onRouteChanged},
/**NEWPAGE**/
]
const routes = [{
    path: conf.apppath,
    component: Viewport,
    indexRoute: {
        component: pages.LandingPage
    },
    childRoutes: subRoutes,
    onChange: onRouteChanged,
}]

export default routes
