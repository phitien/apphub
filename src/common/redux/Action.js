import {Action, ApiAction, ProxyAction} from '../../core/redux'

export class SetBreadcrumbsAction extends Action {}
export class SetBreadcrumbsActionsAction extends Action {}
export class AddModalToViewAction extends Action {}
export class RemoveModalFromViewAction extends ProxyAction {
    proxyClass = 'AddModalToViewAction'
    proxyNormalize(state, payload, ...args) {return null}
}
export class UserLogoutAction extends Action {}
export class UserLoginAction extends ApiAction {
    successActions = ['LoadPageInfoAction']
    loadRequest(payload, ...args) {
        return this.util.query(this.configuration.api.urls.login, payload)
    }
}
export class SetCurrentSearchValueAction extends Action {}
export class SetCurrentPageNoAction extends Action {}
export class SetCurrentPageSizeAction extends Action {}
export class ToggleSidebarLeftAction extends Action {}
export class ToggleSidebarRightAction extends Action {}
export class LoadPageInfoAction extends ApiAction {
    loadRequest(payload, ...args) {
        return this.util.query(this.util.user.isLogged ? this.configuration.api.urls.pageInfoLogged : this.configuration.api.urls.pageInfo)
    }
}
