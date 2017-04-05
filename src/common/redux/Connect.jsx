import {connect} from 'react-redux'
import Action, {CONSTANTS, LoginAction, LoggedInAction, LogoutAction, LoadMenusAction, UpdateMenusAction} from './actions/Action'
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
            userLogin: (new LoginAction(dispatch)).fn,
            userLoggedIn: (new LoggedInAction(dispatch)).fn,
            userLogout: (new LogoutAction(dispatch)).fn,
            loadMenus: (new LoadMenusAction(dispatch)).fn,
            updateMenus: (new UpdateMenusAction(dispatch)).fn,
            addModal: (new Action(dispatch, CONSTANTS.ADD_MODAL)).fn,
            removeModal: (new Action(dispatch, CONSTANTS.REMOVE_MODAL)).fn
        }
    }
    get mapDispatchToProps() {return (dispatch, ownProps) => this.getActions(dispatch, ownProps)}
    get klass() {
        return connect(this.mapStateToProps, this.mapDispatchToProps)(this.__klass)
    }
}
