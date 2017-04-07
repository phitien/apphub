import {connect} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import util from '../util'

export default class Connect {
    constructor(klass) {
        this.__klass = klass
        this.getDefaultProps = this.getDefaultProps.bind(this)
        this.getActions = this.getActions.bind(this)
    }
    getDefaultProps() {return {}}
    getActions(dispatch, ownProps) {return {}}
    extractActions(o, dispatch, ownProps) {
        const actions = {}
        Object.keys(o).map(name => {
            const instance = new o[name](dispatch)
            actions[`execute${name}`] = instance.fn
        })
        return actions
    }
    get util() {return util}
    get mapStateToProps() {return (state, ownProps) => this.util.assign({}, this.getDefaultProps, state)}
    get mapDispatchToProps() {return (dispatch, ownProps) => this.getActions(dispatch, ownProps)}
    get klass() {return connect(this.mapStateToProps, this.mapDispatchToProps)(this.__klass)}

    static createStore(reducer) {
        return createStore(
            combineReducers(reducer),
            applyMiddleware(thunk)
        )
    }
}
