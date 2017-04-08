import {default as DefaultConnect} from '../../../common/redux/Connect'
import * as actions from './Action'

export default class Connect extends DefaultConnect {
    getActions(dispatch, ownProps) {
        return this.util.assign(
            {},
            super.getActions(dispatch, ownProps),
            this.extractActions(actions, dispatch, ownProps)
        )
    }
}
