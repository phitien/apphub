import {Reducer, ConfigReducer, CookieReducer, FalseReducer, TrueReducer, NullReducer, ListReducer} from '../../../core/redux'

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
    debug = true
    get fieldName() {return 'currentHierarchy'}
}
export class SwitchSidebarLeftViewActionReducer extends Reducer {
    get fieldName() {return 'sidebarLeftViewName'}
    get defaultValue() {return 'Hierarchy'}
}
export class ApiSuccessSearchDataElementsActionReducer extends Reducer {
    get defaultValue() {return {elements: [], pageInfo: {pageNo: 1, pageSize: 10, totalPage: 2}}}
    get fieldName() {return 'searchDataElementsResults'}
    normalize(action) {return action.data.body}
}
export class ApiSuccessLoadHierarchyActionReducer extends Reducer {
    get fieldName() {return 'hierarchy'}
    normalize(action) {return action.data.body}
}
export class ApiSuccessLoadDataElementInfoActionReducer extends ListReducer {
    get fieldName() {return 'dataElements'}
    normalize(action) {return action.data.body}
}
