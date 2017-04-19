import {Connect as DefaultConnect} from '../../../common/redux'
import * as actions from './Action'

export default class Connect extends DefaultConnect {
    getActions(dispatch, ownProps, ...args) {return actions}
}
