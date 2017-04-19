import {Connect as DefaultConnect} from '../../core/redux'
import * as actions from './Action'

export default class Connect extends DefaultConnect {
    getActions(dispatch, ownProps, ...args) {return actions}
}