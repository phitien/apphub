import {CONSTANTS} from '../actions/Action'

export default (state = {user: null, menus: [], modal: null}, action) => {
    switch (action.type) {
        case CONSTANTS.USER_LOGOUT:
            return {user: null}
        case CONSTANTS.USER_LOGGEDIN:
            return {user: action.data}
        case CONSTANTS.UPDATE_MENUS:
            return {menus: action.data}
        case CONSTANTS.ADD_MODAL:
            return {modal: action.data}
        case CONSTANTS.REMOVE_MODAL:
            return {modal: null}
        default:
            return state
    }
}
