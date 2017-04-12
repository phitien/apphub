import {Connect as DefaultConnect} from '../../core/redux'
import * as actions from './Action'

export default class Connect extends DefaultConnect {
    getActions(dispatch, ownProps) {
        return this.util.assign(
            super.getActions(dispatch, ownProps),
            this.extractActions(actions, dispatch, ownProps)
        )
    }
}
