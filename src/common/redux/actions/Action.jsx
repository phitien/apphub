export default class Action {
    constructor(dispatch, type) {
        this.__dispatcher = dispatch
        this.__type = type
    }
    get fn() {
        if (!this.__type) throw 'Action has no type'
        return (data) => {
            data.type = this.__type
            this.__dispatcher(data)
        }
    }
}
