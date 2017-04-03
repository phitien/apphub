import {connect} from 'react-redux'
import Action from './actions/Action'

export default class Connect {
    constructor(klass) {
        this.__klass = klass
    }
    get mapStateToProps() {return (state, ownProps) => {
        return state
    }}
    get mapDispatchToProps() {return (dispatch, ownProps) => {
        return {
            addModal: (new Action('ADD_MODAL')).fn,
            removeModal: (new Action('REMOVE_MODAL')).fn
        }
    }}
    get klass() {
        return connect(this.mapStateToProps, this.mapDispatchToProps)(this.__klass)
    }
}
