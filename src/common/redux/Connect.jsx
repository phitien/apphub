import {connect} from 'react-redux'
import Action, {
    CONSTANTS,
    UserLoginAction,
    UserLogoutAction,
    LoadPageInfoAction,
} from './actions/Action'
import util from '../../core/util'

export default class Connect {
    constructor(klass) {
        this.__klass = klass
        this.getActions = this.getActions.bind(this)
    }
    get util() {return util}
    getDefaultProps() {
        return {}
    }
    get mapStateToProps() {return (state, ownProps) => {
        return state
    }}
    getActions(dispatch, ownProps) {
        return {
            userLogin: (new UserLoginAction(dispatch)).fn,
            userLogout: (new UserLogoutAction(dispatch)).fn,
            loadPageInfo: (new LoadPageInfoAction(dispatch)).fn,
            addModal: (new Action(dispatch, CONSTANTS.AddModalToView)).fn,
            removeModal: (new Action(dispatch, CONSTANTS.RemoveModalFromView)).fn
        }
    }
    get mapDispatchToProps() {return (dispatch, ownProps) => this.getActions(dispatch, ownProps)}
    get klass() {
        return connect(this.mapStateToProps, this.mapDispatchToProps)(this.__klass)
    }
}
