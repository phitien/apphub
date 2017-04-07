import {CONSTANTS} from '../../../../common/redux/actions/Action'
import assign from 'object-assign'

const reducer = (state = {
    sidebarLeftView: 'Hierarchy',
    rootHierarchy: null,
    subHierarchy: null,
    hideSidebarLeft: false,
    hideSidebarRight: true,
    interfaceSystems: [],
}, action) => {
    switch (action.type) {
        case CONSTANTS.SearchedDataElementsAction:
            return assign({}, state, {searchDataElementsResults: action.data})
        case CONSTANTS.SwitchSidebarLeftViewAction:
            return assign({}, state, {sidebarLeftView: action.data})
        case CONSTANTS.LoadedRootHierarchyAction:
            return assign({}, state, {rootHierarchy: action.data.body})
        case CONSTANTS.LoadedSubHierarchyAction:
            return assign({}, state, {subHierarchy: action.data.body})
        case CONSTANTS.ToggleSidebarLeftAction:
            return assign({}, state, {hideSidebarLeft: action.data})
        case CONSTANTS.ToggleSidebarRightAction:
            return assign({}, state, {hideSidebarRight: action.data})
        case CONSTANTS.LoadedInterfaceSystemsAction:
            return assign({}, state, {interfaceSystems: action.data})
        default:
            return assign({}, state)
    }
}

export default reducer
