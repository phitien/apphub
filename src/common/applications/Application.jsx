import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import util from '../../core/util'

export default class Application {
    get util() {return util}
    get container() {throw 'No container id provided'}
    get children() {throw 'No children'}
    afterRender = () => {}
    render = (store) => {
        try {
            ReactDOM.render(
                <Provider store={store}>{this.children}</Provider>,
                document.getElementById(this.container),
                this.afterRender
            )
        }
        catch(e) {
            console.error(e)
        }
    }
}
