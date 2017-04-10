import Reducer from '../../../core/redux/Reducer'

export class SetDataElementColumnsActionReducer extends Reducer {
    get defaultState() {
        return {dataElementColumns: []}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {dataElementColumns: action.data})
    }
}
export class SetCurrentHierarchyActionReducer extends Reducer {
    get defaultState() {
        return {currentHierarchy: null, componentTitle: null}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {
            currentHierarchy: action.data,
            componentTitle: action.data ? action.data.name : null
        })
    }
}
export class SearchedDataElementsActionReducer extends Reducer {
    get defaultState() {
        return {searchDataElementsResults: null}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {searchDataElementsResults: action.data.body})
    }
}
export class SwitchSidebarLeftViewActionReducer extends Reducer {
    get defaultState() {
        return {sidebarLeftViewName: 'Hierarchy'}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {sidebarLeftViewName: action.data})
    }
}
export class LoadedRootHierarchyActionReducer extends Reducer {
    get defaultState() {
        return {hierarchy: null}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {hierarchy: action.data.body})
    }
}
export class LoadedSubHierarchyActionReducer extends Reducer {
    get defaultState() {
        return {subHierarchy: null}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {subHierarchy: action.data.body})
    }
}
export class ToggleSidebarLeftActionReducer extends Reducer {
    get defaultState() {
        return {hideSidebarLeft: false}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {hideSidebarLeft: action.data})
    }
}
export class ToggleSidebarRightActionReducer extends Reducer {
    get defaultState() {
        return {hideSidebarRight: true}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {hideSidebarRight: action.data})
    }
}
export class LoadedInterfaceSystemsActionReducer extends Reducer {
    get defaultState() {
        return {interfaceSystems: []}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {interfaceSystems: action.data.body})
    }
}
export class LoadedModelDetailActionReducer extends Reducer {
    get defaultState() {
        return {product: null}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {product: action.data.body})
    }
}
