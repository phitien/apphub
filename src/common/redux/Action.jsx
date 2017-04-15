import {Action as CoreAction} from '../../core/redux'

export class ShowStateAction extends CoreAction {
    dispatchable = false
    beforeDispatch(payload) {
        console.log('State', this.store.getState())
    }
}
export class SetBreadcrumbsAction extends CoreAction {}
export class AddModalToViewAction extends CoreAction {}
export class RemoveModalFromViewAction extends CoreAction {}
export class LoadedPageInfoAction extends CoreAction {}
export class UserLoggedInAction extends CoreAction {}
export class UserLogoutAction extends CoreAction {
    beforeDispatch(payload) {
        this.util.user.unload()
        CoreAction.execute('UserLoggedOutAction')
        CoreAction.execute('LoadPageInfoAction')
    }
}
export class UserLoggedOutAction extends CoreAction {}
export class LoadPageInfoAction extends CoreAction {
    beforeDispatch(payload) {
        this.util.query(this.util.user.isLogged ? configuration.api.urls.pageInfoLogged : configuration.api.urls.pageInfo)
        .success(
            CoreAction.fn('LoadedPageInfoAction')
        ).run()
    }
}
export class UserLoginAction extends CoreAction {
    beforeDispatch(payload) {
        this.util.query(configuration.api.urls.login, payload)
        .success(
            (res) => this.util.user.load(res.data),
            CoreAction.fn('UserLoggedInAction'),
            CoreAction.fn('LoadPageInfoAction')
        ).run()
    }
}
