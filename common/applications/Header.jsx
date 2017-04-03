import '../sass/header/styles.scss'

import {Router, browserHistory} from 'react-router'
import Application from './Application'
import HeaderReducer from '../redux/reducers/Header'
import Header from '../redux/components/Header'

class HeaderApplication extends from Application {
    get container() {return 'header'}
    get reduxStore() {return this.createStore(HeaderReducer)}
    get children() {return <Header/>}
    afterRender = (e) => addEventListener('beforeunload', this.onBeforeUnload)
    onBeforeUnload = (e) => {
        this.util.cookie.remove('login-required')
        this.util.cookie.remove('route-params')
    }
}
const header = new HeaderApplication()
header.render()
export default header
