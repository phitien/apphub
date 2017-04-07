import React from 'react'
import Application from './Application'
import Footer from '../components/navigation/Footer'

export default class FooterApplication extends Application {
    get container() {return 'footer'}
    get children() {return <Footer/>}
    afterRender = (e) => addEventListener('beforeunload', this.onBeforeUnload)
    onBeforeUnload = (e) => {
        this.util.cookie.remove('login-required')
        this.util.cookie.remove('route-params')
    }
}
