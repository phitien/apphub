import {onRouteEntered, onRouteChanged} from '../../common/routes'
import {Viewport, LandingPage, ProductsPage} from './components'

const hierarchyPaths = ['/dmr']
const subRoutes = [
    {path: 'products', component: ProductsPage, onEnter: onRouteEntered},
    {path: 'products/:id', component: ProductsPage, onEnter: onRouteEntered},
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
