import {onRouteEntered, onRouteChanged} from '../../common/routes'
import {Viewport, LandingPage} from './components'

const hierarchyPaths = ['/{appname}']
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
