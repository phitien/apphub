import Connect from '../../../common/redux/Connect'
import * as Actions from './Action'

export default class DmrConnect extends Connect {
    getActions(dispatch, ownProps) {
        return this.util.assign(
            {},
            super.getActions(dispatch, ownProps),
            this.extractActions(Actions, dispatch, ownProps)
        )
    }
}
