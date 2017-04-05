import '../sass/header/styles.scss'

import React from 'react'
import Application from './Application'
import reducer from '../redux/reducers/reducer'
import Header from '../components/navigation/Header'

class HeaderApplication extends Application {
    get container() {return 'header'}
    get reduxStore() {return this.createStore(reducer)}
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
