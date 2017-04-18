import {Reducer, ConfigReducer, CookieReducer, FalseReducer, TrueReducer, NullReducer} from '../../core/redux'

export class SetBreadcrumbsActionReducer extends Reducer {
    get defaultValue() {return []}
    get fieldName() {return 'breadcrumbs'}
}
export class UserLogoutActionReducer extends CookieReducer {
    get defaultValue() {return null}
    get fieldName() {return 'user'}
    setCookie() {this.util.user.unload()}
}
export class ApiSuccessUserLoginActionReducer extends CookieReducer {
    get fieldName() {return 'user'}
    setCookie() {
        this.util.assign(this.__value[this.fieldName], {displayName: this.action.extra[0].account})//TODO remove
        this.util.user.load(this.__value[this.fieldName])
    }
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
