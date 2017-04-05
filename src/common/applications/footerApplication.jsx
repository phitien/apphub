import '../sass/footer/styles.scss'

import React from 'react'
import Application from './Application'
import navigationReducer from '../redux/reducers/navigationReducer'
import Footer from '../components/navigation/Footer'

class FooterApplication extends Application {
    get container() {return 'footer'}
    get reduxStore() {return this.createStore(navigationReducer)}
    get children() {return <Footer/>}
    afterRender = (e) => addEventListener('beforeunload', this.onBeforeUnload)
    onBeforeUnload = (e) => {
        this.util.cookie.remove('login-required')
        this.util.cookie.remove('route-params')
    }
}
const footerApplication = new FooterApplication()
footerApplication.render()
export default footerApplication
