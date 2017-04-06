import {DMRCONSTANTS} from '../actions/Action'
import assign from 'object-assign'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case DMRCONSTANTS.LoadedRootTreeAction:
            return assign({}, state, {root: action.data})
        case DMRCONSTANTS.LoadedSubTreeAction:
            return assign({}, state, {subTree: action.data.children})
        case DMRCONSTANTS.ToggleLeftSidebarAction:
            return assign({}, state, {hideLeftSidebar: action.data})
        case DMRCONSTANTS.LoadedInterfaceSystemsAction:
            return assign({}, state, {interfaceSystems: action.data})
        default:
            return assign({}, state)
    }
}

export default reducer
