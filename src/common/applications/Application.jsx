import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import util from '../../core/util'

export default class Application {
    get util() {return util}
    get container() {throw 'No container id provided'}
    children = () => {throw 'No children'}
    afterRender = () => {}
    render = (store) => {
        this.store = store
        ReactDOM.render(
            <Provider store={this.store}>
                {this.children()}
            </Provider>,
            document.getElementById(this.container),
            this.afterRender
        )
    }
    static addEvents(events) {
        events.map(event => addEventListener(event, (e) => {
            dispatchEvent(new CustomEvent(`global_${event}`, {detail: e.detail}))
        }))
    }
}
