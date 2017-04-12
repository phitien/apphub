import {Action as CoreAction} from '../../core/redux'

export class AddModalToViewAction extends CoreAction {}
export class RemoveModalFromViewAction extends CoreAction {}
export class LoadedPageInfoAction extends CoreAction {}
export class UserLoggedInAction extends CoreAction {}
export class UserLogoutAction extends CoreAction {
    beforeDispatch(payload) {
        this.util.user.unload()
        CoreAction.run(UserLoggedOutAction)
        CoreAction.run(LoadPageInfoAction)
    }
}
export class UserLoggedOutAction extends CoreAction {}
export class LoadPageInfoAction extends CoreAction {
    beforeDispatch(payload) {
        this.util.query(this.util.user.isLogged ? configuration.api.urls.pageInfoLogged : configuration.api.urls.pageInfo, {}, {
            success: (new LoadedPageInfoAction()).getFn()
        })
    }
}
export class UserLoginAction extends CoreAction {
    beforeDispatch(payload) {
        this.util.query(configuration.api.urls.login, payload, {
            success: [
                (res) => this.util.user.load(res.data),
                (new UserLoggedInAction()).getFn(),
                (new LoadPageInfoAction()).getFn()
            ]
        })
    }
}
