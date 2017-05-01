import {onRouteEntered, onRouteChanged} from '../../common/routes'
import {LandingPage} from './pages'
import Viewport from './Viewport'

const hierarchyPaths = ['/asd']
const subRoutes = [
]
const routes = []

hierarchyPaths.map(hierarchy => {
    routes.push({
        path: hierarchy,
        component: Viewport,
        indexRoute: {
            component: LandingPage
        },
        childRoutes: subRoutes,
        onChange: onRouteChanged,
    })
})

export default routes
