import React from 'react'
import {Router} from 'react-router'
import Application from './Application'
import {DevTools} from '../../core'

export default class RoutesApplication extends Application {
    get routes() {
        if (!this.__routes) throw 'No routes provided'
        return this.__routes
    }
    set routes(v) {this.__routes = v}
    get history() {return this.util.history}

    children = () => <div className='application'>
        <Router routes={this.routes} history={this.history}/>
        {this.configuration.showDevTool ? <DevTools/> : null}
    </div>
}
