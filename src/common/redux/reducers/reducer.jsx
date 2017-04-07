import {CONSTANTS} from '../actions/Action'
import assign from 'object-assign'

export default (state = {
    modal: null, user: null,
    pageInfo: {
        title: 'Applications Hub',
        menus: [],
    }
}, action) => {
    switch (action.type) {
        case CONSTANTS.UserLogoutAction:
            return assign({}, state, {user: null})
        case CONSTANTS.UserLoggedInAction:
            return assign({}, state, {user: action.data})
        case CONSTANTS.LoadedPageInfoAction:
            return assign({}, state, {pageInfo: action.data})
        case CONSTANTS.AddModalToView:
            return assign({}, state, {modal: action.data})
        case CONSTANTS.RemoveModalFromView:
            return assign({}, state, {modal: null})
        default:
            return assign({}, state)
    }
}
