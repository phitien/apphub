import {connect} from 'react-redux'
import Action from './actions/Action'

export default class Connect {
    constructor(klass) {
        this.__klass = klass
    }
    get mapStateToProps() {return (state, ownProps) => {
        return state ? state : {menus: [], modal: null}
    }}
    get mapDispatchToProps() {return (dispatch, ownProps) => {
        return {
            addMenus: (new Action(dispatch, 'ADD_MENUS')).fn,
            addModal: (new Action(dispatch, 'ADD_MODAL')).fn,
            removeModal: (new Action(dispatch, 'REMOVE_MODAL')).fn
        }
    }}
    get klass() {
        return connect(this.mapStateToProps, this.mapDispatchToProps)(this.__klass)
    }
}
