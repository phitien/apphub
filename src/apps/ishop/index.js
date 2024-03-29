// import './sass/styles.scss'
require('./config')

import assign from 'object-assign'
import {getStore} from '../../core/redux'
import * as CommonReducers from '../../common/redux/Reducer'
import * as Reducers from './redux/Reducer'
import events from './events'
import routes from './routes'
import {HeaderApplication, FooterApplication} from '../../common/applications'
import Application from './Application'

HeaderApplication.addEvents(events)

const store = getStore(assign(CommonReducers, Reducers))

const headerApplication = new HeaderApplication()
headerApplication.render(store)

const footerApplication = new FooterApplication()
footerApplication.render(store)

const application = new Application()
application.routes = routes
application.render(store)
