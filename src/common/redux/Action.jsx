import Action from '../../core/redux/Action'

export class AddModalToViewAction extends Action {}
export class RemoveModalFromViewAction extends Action {}
export class LoadedPageInfoAction extends Action {}
export class UserLoggedInAction extends Action {}
export class UserLogoutAction extends Action {
    beforeDispatch(payload) {
        this.util.user.unload()
        Action.run(new UserLoggedOutAction(this.dispatcher))
        Action.run(new LoadPageInfoAction(this.dispatcher))
    }
}
export class UserLoggedOutAction extends Action {}
export class LoadPageInfoAction extends Action {
    beforeDispatch(payload) {
        this.util.query(this.util.user.isLogged ? '/static/dmr/api/page-logged.json' : '/static/dmr/api/page.json', {}, {
            success: (new LoadedPageInfoAction(this.dispatcher)).fn
        })
    }
}
export class UserLoginAction extends Action {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/login.json', payload, {
            success: [
                (res) => this.util.user.load(res.data),
                (new UserLoggedInAction(this.dispatcher)).fn,
                (new LoadPageInfoAction(this.dispatcher)).fn
            ]
        })
    }
}
