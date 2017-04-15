import {default as CoreReducer, ConfigReducer, FalseReducer, TrueReducer} from '../../../core/redux/Reducer'

export class SetCurrentSearchValueActionReducer extends ConfigReducer {
    get fieldName() {return 'currentSearchValue'}
}
export class SetCurrentPageNoActionReducer extends ConfigReducer {
    get fieldName() {return 'currentPageNo'}
}
export class SetCurrentPageSizeActionReducer extends ConfigReducer {
    get fieldName() {return 'currentPageSize'}
}
export class ToggleSidebarLeftActionReducer extends FalseReducer {
    get fieldName() {return 'hideSidebarLeft'}
}
export class ToggleSidebarRightActionReducer extends TrueReducer {
    get fieldName() {return 'hideSidebarRight'}
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
export class SetListSourceSystemsActionReducer extends ConfigReducer {
    get fieldName() {return 'listSourceSystems'}
}
export class SetDataElementColumnsActionReducer extends ConfigReducer {
    get fieldName() {return 'dataElementColumns'}
}
export class SetCurrentHierarchyActionReducer extends CoreReducer {
    get fieldName() {return 'currentHierarchy'}
}
export class SearchedDataElementsActionReducer extends CoreReducer {
    get fieldName() {return 'searchDataElementsResults'}
    normalize(action) {return action.data.body}
}
export class SwitchSidebarLeftViewActionReducer extends CoreReducer {
    get fieldName() {return 'sidebarLeftViewName'}
    get defaultValue() {return 'Hierarchy'}
}
export class LoadedHierarchyActionReducer extends CoreReducer {
    get fieldName() {return 'hierarchy'}
    normalize(action) {return action.data.body}
}
export class LoadedDataElementInfoActionReducer extends CoreReducer {
    get fieldName() {return 'dataElement'}
}
export class LoadedInterfaceSystemsActionReducer extends CoreReducer {
    get fieldName() {return 'interfaceSystems'}
    get defaultValue() {return []}
    normalize(action) {return action.data.body}
}
