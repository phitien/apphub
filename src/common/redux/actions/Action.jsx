import util from '../../../core/util'

export const CONSTANTS = {
    USER_LOGIN: 'USER_LOGIN',
    USER_LOGGEDIN: 'USER_LOGGEDIN',
    USER_LOGOUT: 'USER_LOGOUT',
    USER_LOGGEDOUT: 'USER_LOGGEDOUT',
    ADD_MODAL: 'ADD_MODAL',
    REMOVE_MODAL: 'REMOVE_MODAL',
    UPDATE_MENUS: 'UPDATE_MENUS',
    LOAD_MENUS: 'LOAD_MENUS',
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
        return (data) => {
            this.beforeDispatch(data)
            this.dispatcher(this.util.assign({}, data, {type: this.type}))
            this.afterDispatch(data)
        }
    }
    run(data) {this.fn(data)}
}
const loadMenus = (util, dispatcher) => util.query(util.user.isLogged ? '/static/api/user-menus.json' : '/static/api/menus.json', null, {
    success: (new UpdateMenusAction(dispatcher)).fn
})

export class LoadMenusAction extends Action {
    get type() {return CONSTANTS.LOAD_MENUS}
    beforeDispatch = (data) => loadMenus(this.util, this.dispatcher)
}
export class UpdateMenusAction extends Action {
    get type() {return CONSTANTS.UPDATE_MENUS}
    beforeDispatch = (data) => {
        console.log(data)
    }
}
export class LoginAction extends Action {
    get type() {return CONSTANTS.USER_LOGIN}
    beforeDispatch = (data) => {
        this.util.query('/static/api/login.json', data, {
            success: (new LoggedInAction(this.dispatcher)).fn
        })
    }
}
export class LoggedInAction extends Action {
    get type() {return CONSTANTS.USER_LOGGEDIN}
    beforeDispatch = (data) => {
        this.util.user.load(data.data)
        loadMenus(this.util, this.dispatcher)
    }
}
export class LogoutAction extends Action {
    get type() {return CONSTANTS.USER_LOGOUT}
    beforeDispatch = (data) => {
        this.util.user.unload()
        loadMenus(this.util, this.dispatcher)
    }
}
