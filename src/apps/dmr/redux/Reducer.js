import {Reducer, ConfigReducer, CookieReducer, FalseReducer, TrueReducer, NullReducer} from '../../../core/redux'

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
export class SetCurrentHierarchyActionReducer extends Reducer {
    get fieldName() {return 'currentHierarchy'}
}
export class SwitchSidebarLeftViewActionReducer extends Reducer {
    get fieldName() {return 'sidebarLeftViewName'}
    get defaultValue() {return 'Hierarchy'}
}
export class ApiSuccessSearchDataElementsActionReducer extends Reducer {
    get fieldName() {return 'searchDataElementsResults'}
    normalize(action) {return action.data.body}
}
export class ApiSuccessLoadHierarchyActionReducer extends Reducer {
    get fieldName() {return 'hierarchy'}
    normalize(action) {return action.data.body}
}
export class ApiSuccessLoadDataElementInfoActionReducer extends Reducer {
    get fieldName() {return 'dataElement'}
}
