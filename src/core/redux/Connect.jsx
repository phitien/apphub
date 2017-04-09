import {connect} from 'react-redux'
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
            const klass = o[name]
            if (klass && typeof klass == 'function') {
                const action = new klass()
                actions[`execute${name}`] = action.getFn(dispatch)
            }
        })
        return actions
    }
    get util() {return util}
    get mapStateToProps() {return (state, ownProps) => {
        const newProps = this.util.assign({}, this.getDefaultProps)
        if (state) Object.keys(state).map(k => this.util.assign(newProps, state[k]))
        return newProps
    }}
    get mapDispatchToProps() {return (dispatch, ownProps) => {
        console.log(this.getActions(dispatch, ownProps))
        return this.getActions(dispatch, ownProps)
    }}
    get klass() {return connect(this.mapStateToProps, this.mapDispatchToProps)(this.__klass)}

    static createStore(reducer) {
        return createStore(
            combineReducers(reducer),
            applyMiddleware(thunk)
        )
    }
}
