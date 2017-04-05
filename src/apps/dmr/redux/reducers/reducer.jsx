import {DMRCONSTANTS} from '../actions/Action'

const reducer = (state = {root: null}, action) => {
    switch (action.type) {
        case DMRCONSTANTS.LOADED_ROOT:
            return {root: action.data}
        default:
            return state
    }
}

export default reducer
