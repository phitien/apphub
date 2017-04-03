import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import util from '../../core/Util'

export default class Application {
    get util() {return util}
    get container() {throw 'No container id provided'}
    get reduxStore() {throw 'No redux store provided'}
    get children() {throw 'No children'}
    createStore = (reducer) => createStore(reducer, applyMiddleware(thunk))
    afterRender = () => {}
    render = () => ReactDOM.render(
        <Provider store={this.reduxStore}>{this.children}</Provider>,
        document.getElementById(this.container),
        this.afterRender
    )
}
