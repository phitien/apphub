import {Router} from 'react-router'
import Application from './Application'

export default class RoutesApplication extends from Application {
    get routes() {throw 'No routes provided'}
    get history() {return this.util.history}
    get children() {return <Router routes={this.routes} history={this.history}/>
}
