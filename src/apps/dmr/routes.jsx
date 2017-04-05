import {RouteEnterLoginRequired} from '../../common/routes/RouteEnterLoginRequired'
import DmrViewport from './components/Viewport'
import LandingPage from './components/landing/Page'
import SearchPage from './components/search/Page'

const rootPaths = ['/dmr']
const subRoutes = [
    {path: 'search', component: SearchPage, onEnter: RouteEnterLoginRequired}
]
const routes = []

rootPaths.map(root => {
    routes.push({
        path: root,
        component: DmrViewport,
        indexRoute: {
            component: LandingPage
        },
        childRoutes: subRoutes,
        onEnter: RouteEnterLoginRequired,
    })
})

export default routes
