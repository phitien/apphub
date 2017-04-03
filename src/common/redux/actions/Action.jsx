export default class Action {
    constructor(type) {
        this.type = type
    }
    get fn() {
        if (!this.type) throw 'Action has no type'
        return (data) => {return (dispatch) => {
            dispatch({
                type: this.type,
                data
            })
        }}
    }
}
