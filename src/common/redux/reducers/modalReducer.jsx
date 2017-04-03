import util from '../../../core/util'

export default (state = {modal: null}, action) => {
    switch (action.type) {
        case 'ADD_MODAL':
            return {modal: action.data}
        case 'REMOVE_MODAL':
            return {modal: null}
    }
}
