// import './sass/styles.scss'

import assign from 'object-assign'

import CONSTANTS, {register as registerAction} from '../../core/redux/CONSTANTS'
import * as DefaultActions from '../../common/redux/Action'
import * as DrmActions from './redux/Action'
const Actions = assign({}, DefaultActions, DrmActions)
Object.keys(Actions).map(name => registerAction(Actions[name]))

import REDUCERS, {register as registerReducer} from '../../core/redux/REDUCERS'
import * as DefaultReducers from '../../common/redux/Reducer'
import * as DrmReducers from './redux/Reducer'
const Reducers = assign({}, DefaultReducers, DrmReducers)
Object.keys(Reducers).map(name => registerReducer(Reducers[name]))

import Connect from '../../common/redux/Connect'
const store = Connect.createStore(REDUCERS)

import HeaderApplication from '../../common/applications/HeaderApplication'
const headerApplication = new HeaderApplication()
headerApplication.render(store)

import Application from './Application'
const application = new Application()
application.render(store)

import FooterApplication from '../../common/applications/FooterApplication'
const footerApplication = new FooterApplication()
footerApplication.render(store)
