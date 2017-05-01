import {onRouteEntered, onRouteChanged} from '../../common/routes'
import * as pages from './pages'
import Viewport from './Viewport'

const subRoutes = [
{path: '/asd/sub', component: pages.SubPage, onChange: onRouteChanged},
{path: '/asd/ok', component: pages.OkPage, onChange: onRouteChanged},
/**NEWPAGE**/
]
const routes = [{
    path: '/asd',
    component: Viewport,
    indexRoute: {
        component: pages.LandingPage
    },
    childRoutes: subRoutes,
    onChange: onRouteChanged,
}]

export default routes
