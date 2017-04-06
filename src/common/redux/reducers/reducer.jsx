import {CONSTANTS} from '../actions/Action'
import assign from 'object-assign'

export default (state, action) => {
    switch (action.type) {
        case CONSTANTS.UserLogoutAction:
            return assign({}, state, {user: null})
        case CONSTANTS.UserLoggedInAction:
            return assign({}, state, {user: action.data})
        case CONSTANTS.UpdateMenusAction:
            return assign({}, state, {menus: action.data})
        case CONSTANTS.AddModalToView:
            return assign({}, state, {modal: action.data})
        case CONSTANTS.RemoveModalFromView:
            return assign({}, state, {modal: null})
        default:
            return assign({}, state)
    }
}
