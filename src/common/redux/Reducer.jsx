import {default as CoreReducer, ConfigReducer, FalseReducer, TrueReducer} from '../../core/redux/Reducer'

export class SetBreadcrumbsActionReducer extends CoreReducer {
    get defaultValue() {return []}
    get fieldName() {return 'breadcrumbs'}
}
export class UserLogoutActionReducer extends CoreReducer {
    get fieldName() {return 'user'}
    normalize(action) {return null}
}
export class UserLoginActionReducer extends CoreReducer {
    get fieldName() {return 'user'}
}
export class LoadedPageInfoActionReducer extends CoreReducer {
    get fieldName() {return 'pageInfo'}
    get defaultValue() {return {app: '', menus: []}}
    normalize(action) {return action.data.body}
}
export class AddModalToViewActionReducer extends CoreReducer {
    get fieldName() {return 'modal'}
}
export class RemoveModalFromViewActionReducer extends CoreReducer {
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
