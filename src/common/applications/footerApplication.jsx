import React from 'react'
import Application from './Application'
import reducer from '../redux/reducers/reducer'
import Footer from '../components/navigation/Footer'

class FooterApplication extends Application {
    get container() {return 'footer'}
    get reduxStore() {return this.createStore(reducer)}
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
