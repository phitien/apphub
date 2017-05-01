import {onRouteEntered, onRouteChanged} from '../../common/routes'
import * as pages from './pages'
import Viewport from './Viewport'

const subRoutes = [
{path: '{apppath}/sub', component: pages.SubPage, onChange: onRouteChanged}
/**NEWPAGE**/
]
const routes = [{
    path: '{apppath}',
    component: Viewport,
    indexRoute: {
        component: pages.LandingPage
    },
    childRoutes: subRoutes,
    onChange: onRouteChanged,
}]

export default routes
