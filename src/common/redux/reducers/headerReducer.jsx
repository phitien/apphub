const reducer = (state = {modal: null}, action) => {
    switch (action.actionType) {
        case 'ADD_MODAL':
            return {modal: action.data}
        case 'REMOVE_MODAL':
            return {modal: null}
        default:
            return state
    }
}

export default reducer
