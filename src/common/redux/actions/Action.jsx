import util from '../../../core/util'

export const CONSTANTS = {
    UserLoginAction: 'UserLoginAction',
    UserLoggedInAction: 'UserLoggedInAction',
    UserLogoutAction: 'UserLogoutAction',
    UserLoggedOutAction: 'UserLoggedOutAction',
    AddModalToView: 'AddModalToView',
    RemoveModalFromView: 'RemoveModalFromView',
    UpdateMenusAction: 'UpdateMenusAction',
    LoadMenusAction: 'LoadMenusAction',
}
export default class Action {
    constructor(dispatch, type) {
        this.__dispatcher = dispatch
        this.__type = type
    }
    beforeDispatch(data) {}
    afterDispatch(data) {}
    get util() {return util}
    get type() {return this.__type}
    get dispatcher() {return this.__dispatcher}
    get fn() {
        if (!this.type) throw 'Action has no type'
        return (function(data) {
            this.beforeDispatch.apply(this, arguments)
            this.dispatcher(this.util.assign({}, data, {type: this.type}))
            this.afterDispatch.apply(this, arguments)
        }).bind(this)
    }
    run(data) {this.fn(data)}
}
const loadMenus = (util, dispatcher) => util.query(util.user.isLogged ? '/static/dmr/api/user-menus.json' : '/static/dmr/api/menus.json', null, {
    success: (new UpdateMenusAction(dispatcher)).fn
})

export class LoadMenusAction extends Action {
    get type() {return CONSTANTS.LoadMenusAction}
    beforeDispatch = (data) => loadMenus(this.util, this.dispatcher)
}
export class UpdateMenusAction extends Action {
    get type() {return CONSTANTS.UpdateMenusAction}
    beforeDispatch = (data) => {
        // console.log(data)
    }
}
export class UserLoginAction extends Action {
    get type() {return CONSTANTS.UserLoginAction}
    beforeDispatch = (data) => {
        this.util.query('/static/dmr/api/login.json', data, {
            success: (new UserLoggedInAction(this.dispatcher)).fn
        })
    }
}
export class UserLoggedInAction extends Action {
    get type() {return CONSTANTS.UserLoggedInAction}
    beforeDispatch = (data) => {
        this.util.user.load(data.data)
        loadMenus(this.util, this.dispatcher)
    }
}
export class UserLogoutAction extends Action {
    get type() {return CONSTANTS.UserLogoutAction}
    beforeDispatch = (data) => {
        this.util.user.unload()
        loadMenus(this.util, this.dispatcher)
    }
}
