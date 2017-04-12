import Reducer, {ConfigReducer, FalseReducer, TrueReducer} from '../../../core/redux/Reducer'

export class SetCurrentSearchValueActionReducer extends ConfigReducer {
    debug(state, action) {console.log(this.constructor.name, this.value, state, action)}
    get fieldName() {return 'currentSearchValue'}
}
export class SetCurrentPageNoActionReducer extends ConfigReducer {
    get fieldName() {return 'currentPageNo'}
}
export class SetCurrentPageSizeActionReducer extends ConfigReducer {
    get fieldName() {return 'currentPageSize'}
}
export class SetCurrentOutputTypeActionReducer extends ConfigReducer {
    get fieldName() {return 'currentOutputType'}
}
export class SetCurrentSourceSystemActionReducer extends ConfigReducer {
    get fieldName() {return 'currentSourceSystem'}
}
export class SetListOutputTypesActionReducer extends ConfigReducer {
    get fieldName() {return 'listOutputTypes'}
}
export class SetDataElementColumnsActionReducer extends ConfigReducer {
    get fieldName() {return 'dataElementColumns'}
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
    get fieldName() {return 'searchDataElementsResults'}
    getData(action) {return action.data.body}
}
export class SwitchSidebarLeftViewActionReducer extends Reducer {
    get fieldName() {return 'sidebarLeftViewName'}
    get defaultValue() {return 'Hierarchy'}
}
export class LoadedRootHierarchyActionReducer extends Reducer {
    get fieldName() {return 'hierarchy'}
    getData(action) {return action.data.body}
}
export class LoadedSubHierarchyActionReducer extends Reducer {
    get fieldName() {return 'subHierarchy'}
    getData(action) {return action.data.body}
}
export class ToggleSidebarLeftActionReducer extends FalseReducer {
    get fieldName() {return 'hideSidebarLeft'}
}
export class ToggleSidebarRightActionReducer extends TrueReducer {
    get fieldName() {return 'hideSidebarRight'}
}
export class LoadedInterfaceSystemsActionReducer extends Reducer {
    get fieldName() {return 'interfaceSystems'}
    get defaultValue() {return []}
    getData(action) {return action.data.body}
}
export class LoadedDataElementInfoActionReducer extends Reducer {
    get fieldName() {return 'dataElement'}
    getData(action) {return action.data.body}
}
