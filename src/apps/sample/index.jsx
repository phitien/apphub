// import './sass/styles.scss'
require('./config')

import assign from 'object-assign'
import {getStoreInstance} from '../../core/redux'
import * as DefaultReducers from '../../common/redux/Reducer'
import * as DrmReducers from './redux/Reducer'
import events from './events'
import routes from './routes'
import {HeaderApplication, FooterApplication} from '../../common/applications'
import Application from './Application'

HeaderApplication.addEvents(events)

const store = getStoreInstance(assign(DefaultReducers, DrmReducers))

const headerApplication = new HeaderApplication()
// headerApplication.routes = routes
headerApplication.render(store)

const footerApplication = new FooterApplication()
// footerApplication.routes = routes
footerApplication.render(store)

const application = new Application()
application.routes = routes
application.render(store)
