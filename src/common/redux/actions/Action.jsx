export default class Action {
    constructor(type) {
        this.__type = type
    }
    get fn() {
        if (!this.__type) throw 'Action has no type'
        return (data) => {return (dispatch) => {
            dispatch({
                type: this.__type,
                data
            })
        }}
    }
}
