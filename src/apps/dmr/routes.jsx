import onRouteEntered from '../../common/routes/onRouteEntered'
import onRouteChanged from '../../common/routes/onRouteChanged'
import Viewport from './components/Viewport'
import LandingPage from './components/landing/Page'
import ProductsPage from './components/products/Page'
import ProductPage from './components/product/Page'

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
