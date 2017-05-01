import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {util, configuration} from '../../core'
import {Action} from '../../core/redux'

export default class Application {
    configuration = configuration
    util = util
    children = () => {throw 'No children'}
    afterRender = () => {
        Action.execute('LoadPageInfoAction')
    }
    render = (store) => {
        this.store = store
        const _render = () => {
            ReactDOM.render(
                <Provider store={this.store}>
                    {this.children()}
                </Provider>,
                document.getElementById(this.container),
                this.afterRender
            )
        }
        addEventListener('resize', _render)
        _render()
    }
    static addEvents(events) {
        events.map(event => addEventListener(event, (e) => {
            dispatchEvent(new CustomEvent(`global_${event}`, {detail: e.detail}))
        }))
    }
}
