import {Connect as CoreConnect} from '../../core/redux'
import * as actions from './Action'

export default class Connect extends CoreConnect {
    getActions(dispatch, ownProps, ...args) {
        return this.util.assign({}, super.getActions(dispatch, ownProps, ...args), actions)
    }
}
