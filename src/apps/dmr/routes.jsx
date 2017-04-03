import {RouteEnterLoginRequired} from '../../common/routes/RouteEnterLoginRequired'
import DmrViewport from './components/Viewport'
import LandingPage from './components/landing/Page'
/**NEW_PAGE**/

const rootPaths = ['/public/dmr']
const subRoutes = [
/**NEW_PAGE_ROUTE**/
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
