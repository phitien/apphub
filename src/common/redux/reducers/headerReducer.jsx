export default (state, action) => {
    switch (action.type) {
        case 'ADD_MENUS':
            return {menus: action.data}
        case 'ADD_MODAL':
            return {modal: action.data}
        case 'REMOVE_MODAL':
            return {modal: null}
        default:
            return {}
    }
}
