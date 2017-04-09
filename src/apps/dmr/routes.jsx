import {RouteEnterLoginRequired} from '../../common/routes/RouteEnterLoginRequired'
import Viewport from './components/Viewport'
import LandingPage from './components/landing/Page'
import ProductsPage from './components/products/Page'
import ProductPage from './components/product/Page'

const hierarchyPaths = ['/dmr']
const subRoutes = [
    {path: 'products', component: ProductsPage, onEnter: RouteEnterLoginRequired},
    {path: 'products/:id', component: ProductsPage, onEnter: RouteEnterLoginRequired},
    {path: 'product/:id', component: ProductPage, onEnter: RouteEnterLoginRequired}
]
const routes = []

hierarchyPaths.map(hierarchy => {
    routes.push({
        path: hierarchy,
        component: Viewport,
        onChange: (prev, next) => dispatchEvent(new CustomEvent('url_changed', {detail: {prev, next}})),
        indexRoute: {
            component: LandingPage
        },
        childRoutes: subRoutes,
        onEnter: RouteEnterLoginRequired,
    })
})

export default routes
