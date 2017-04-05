import {CONSTANTS} from '../actions/Action'
import assign from 'object-assign'

export default (state, action) => {
    switch (action.type) {
        case CONSTANTS.USER_LOGOUT:
            return assign({}, state, {user: null})
        case CONSTANTS.USER_LOGGEDIN:
            return assign({}, state, {user: action.data})
        case CONSTANTS.UPDATE_MENUS:
            return assign({}, state, {menus: action.data})
        case CONSTANTS.ADD_MODAL:
            return assign({}, state, {modal: action.data})
        case CONSTANTS.REMOVE_MODAL:
            return assign({}, state, {modal: null})
        default:
            return assign({}, state)
    }
}
