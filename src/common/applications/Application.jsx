import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import util from '../../core/util'

export default class Application {
    get util() {return util}
    get container() {throw 'No container id provided'}
    get store() {return this.__store}
    set store(v) {this.__store = v}
    children = () => {throw 'No children'}
    afterRender = () => {}
    render = (store) => {
        this.__store = store
        if (configuration.env == 'production' || configuration.env == 'state' || configuration.env == 'test') {
            try {
                ReactDOM.render(
                    <Provider store={this.store}>{this.children()}</Provider>,
                    document.getElementById(this.container),
                    this.afterRender
                )
            }
            catch(e) {}
        }
        else {
            ReactDOM.render(
                <Provider store={this.store}>{this.children()}</Provider>,
                document.getElementById(this.container),
                this.afterRender
            )
        }
    }
    static addEvents(events) {
        events.map(event => addEventListener(event, (e) => {
            dispatchEvent(new CustomEvent(`global_${event}`, {detail: e.detail}))
        }))
    }
}
