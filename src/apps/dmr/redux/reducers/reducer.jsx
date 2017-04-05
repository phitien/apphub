import {DMRCONSTANTS} from '../actions/Action'
import assign from 'object-assign'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case DMRCONSTANTS.LOADED_ROOT:
            return assign({}, state, {root: action.data})
        case DMRCONSTANTS.TOOGLE_LEFT_SIDEBAR:
            return assign({}, state, {hideLeftSidebar: action.data})
        default:
            return assign({}, state)
    }
}

export default reducer
