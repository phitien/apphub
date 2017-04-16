import {connect} from 'react-redux'
import thunk from 'redux-thunk'
import util from '../util'
import Action from './Action'

export default class Connect {
    constructor(klass) {
        this.__klass = klass
        this.getDefaultProps = this.getDefaultProps.bind(this)
        this.getActions = this.getActions.bind(this)
    }
    getDefaultProps() {return {}}
    getActions(dispatch, ownProps) {return {}}
    registerActions(dispatch, ownProps) {
        const actions = this.getActions(dispatch, ownProps)
        Object.keys(actions).map(k => Action.put(actions[k], dispatch, ownProps))
    }
    get util() {return util}
    get mapStateToProps() {return (state, ownProps) => {
        const newProps = this.util.assign({}, this.getDefaultProps)
        if (state) Object.keys(state).map(k => this.util.assign(newProps, state[k]))
        return newProps
    }}
    get mapDispatchToProps() {return (dispatch, ownProps) => {
        this.registerActions(dispatch, ownProps)
        return Action.actions()
    }}
    get klass() {
        return connect(this.mapStateToProps, this.mapDispatchToProps)(this.__klass)
    }

    static createStore(reducer) {
        return createStore(
            combineReducers(reducer),
            applyMiddleware(thunk)
        )
    }
}
