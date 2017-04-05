import Connect from '../../../common/redux/Connect'
import {LoadRootAction} from './actions/Action'

export default class DmrConnect extends Connect {
    getActions(dispatch, ownProps) {
        return this.util.assign({}, super.getActions(dispatch, ownProps), {
            loadRoot: (new LoadRootAction(dispatch)).fn
        })
    }
}
