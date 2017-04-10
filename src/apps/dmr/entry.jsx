// import './sass/styles.scss'
import assign from 'object-assign'
import evn from './evn'
import {getStoreInstance} from '../../core/redux/Store'
import * as DefaultReducers from '../../common/redux/Reducer'
import * as DrmReducers from './redux/Reducer'

const store = getStoreInstance(assign(DefaultReducers, DrmReducers))

import HeaderApplication from '../../common/applications/HeaderApplication'
const headerApplication = new HeaderApplication()
headerApplication.render(store)

import Application from './Application'
const application = new Application()
application.render(store)

import FooterApplication from '../../common/applications/FooterApplication'
const footerApplication = new FooterApplication()
footerApplication.render(store)
