import React from 'react'
import Application from './Application'
import Header from '../components/navigation/Header'

export default class HeaderApplication extends Application {
    get container() {return 'header'}
    get children() {return <Header/>}
    afterRender = (e) => addEventListener('beforeunload', this.onBeforeUnload)
    onBeforeUnload = (e) => {
        this.util.cookie.remove('login-required')
        this.util.cookie.remove('route-params')
    }
}
