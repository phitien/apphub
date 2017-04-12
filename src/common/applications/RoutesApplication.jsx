import React from 'react'
import {Router} from 'react-router'
import Application from './Application'

export default class RoutesApplication extends Application {
    get routes() {
        if (!this.__routes) throw 'No routes provided'
        return this.__routes
    }
    set routes(v) {this.__routes = v}
    get history() {return this.util.history}
    children = () => <Router routes={this.routes} history={this.history}/>
}
