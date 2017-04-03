import '../sass/header/styles.scss'

import React from 'react'
import Application from './Application'
import headerReducer from '../redux/reducers/headerReducer'
import Header from '../redux/components/Header'

class HeaderApplication extends Application {
    get container() {return 'header'}
    get reduxStore() {return this.createStore(headerReducer)}
    get children() {return <Header/>}
    afterRender = (e) => addEventListener('beforeunload', this.onBeforeUnload)
    onBeforeUnload = (e) => {
        this.util.cookie.remove('login-required')
        this.util.cookie.remove('route-params')
    }
}
const headerApplication = new HeaderApplication()
headerApplication.render()
export default headerApplication
