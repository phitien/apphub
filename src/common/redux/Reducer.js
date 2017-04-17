import {Reducer, ConfigReducer, FalseReducer, TrueReducer} from '../../core/redux'

export class SetBreadcrumbsActionReducer extends Reducer {
    get defaultValue() {return []}
    get fieldName() {return 'breadcrumbs'}
}
export class UserLogoutActionReducer extends Reducer {
    get fieldName() {return 'user'}
    normalize(action) {return null}
}
export class UserLoginActionReducer extends Reducer {
    get fieldName() {return 'user'}
}
export class AddModalToViewActionReducer extends Reducer {
    get fieldName() {return 'modal'}
}
export class RemoveModalFromViewActionReducer extends Reducer {
    get fieldName() {return 'modal'}
    normalize(action) {return null}
}
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
    debug = true
    get fieldName() {return 'hideSidebarLeft'}
}
export class ToggleSidebarRightActionReducer extends TrueReducer {
    get fieldName() {return 'hideSidebarRight'}
}
export class ApiSuccessLoadPageInfoActionReducer extends Reducer {
    get fieldName() {return 'pageInfo'}
    get defaultValue() {return {app: '', menus: []}}
    normalize(action) {return action.data.body}
}
