import util from '../../../core/util'

export const CONSTANTS = {
    AddModalToView: 'AddModalToView',
    RemoveModalFromView: 'RemoveModalFromView',
}

export default class Action {
    constructor(dispatch, type) {
        this.__dispatcher = dispatch
        this.__type = type ? type : this.constructor.name
        CONSTANTS[this.type] = this.type
    }
    beforeDispatch(payload) {}
    afterDispatch(payload) {}
    getData(payload) {
        return this.util.assign({}, payload, {type: this.type})
    }
    get util() {return util}
    get type() {return this.__type}
    get dispatcher() {return this.__dispatcher}
    get fn() {
        if (!this.type) throw 'Action has no type'
        return (function(payload) {
            this.beforeDispatch.apply(this, arguments)
            this.dispatcher(this.getData(payload))
            this.afterDispatch.apply(this, arguments)
        }).bind(this)
    }
    static run(action) {
        if (Array.isArray(arguments) && arguments.length) arguments.shift()
        action.fn.apply(action, arguments)
    }
}

export class LoadPageInfoAction extends Action {
    beforeDispatch(payload) {
        this.util.query(this.util.user.isLogged ? '/static/dmr/api/user-page.json' : '/static/dmr/api/page.json', {}, {
            success: (new Action(this.dispatcher, 'LoadedPageInfoAction')).fn
        })
    }
}
export class UserLoginAction extends Action {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/login.json', payload, {
            success: [
                (res) => this.util.user.load(res.data),
                (new Action(this.dispatcher, 'UserLoggedInAction')).fn,
                (new LoadPageInfoAction(this.dispatcher)).fn
            ]
        })
    }
}
export class UserLogoutAction extends Action {
    beforeDispatch(payload) {
        this.util.user.unload()
        Action.run(new LoadPageInfoAction(this.dispatcher))
    }
}
