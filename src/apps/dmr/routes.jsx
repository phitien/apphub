import {RouteEnterLoginRequired} from '../../common/routes/RouteEnterLoginRequired'
import DmrViewport from './components/Viewport'
import LandingPage from './components/landing/Page'
import SearchPage from './components/search/Page'

const hierarchyPaths = ['/dmr']
const subRoutes = [
    {path: 'search', component: SearchPage, onEnter: RouteEnterLoginRequired}
]
const routes = []

hierarchyPaths.map(hierarchy => {
    routes.push({
        path: hierarchy,
        component: DmrViewport,
        indexRoute: {
            component: LandingPage
        },
        childRoutes: subRoutes,
        onEnter: RouteEnterLoginRequired,
    })
})

export default routes
