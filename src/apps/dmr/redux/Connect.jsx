import Connect from '../../../common/redux/Connect'
import {LoadRootTreeAction, LoadSubTreeAction, ToggleLeftSidebarAction, LoadInterfaceSystemsAction} from './actions/Action'

export default class DmrConnect extends Connect {
    getActions(dispatch, ownProps) {
        return this.util.assign({}, super.getActions(dispatch, ownProps), {
            loadRootTree: (new LoadRootTreeAction(dispatch)).fn,
            loadSubTree: (new LoadSubTreeAction(dispatch)).fn,
            toggleLeftSidebar: (new ToggleLeftSidebarAction(dispatch)).fn,
            loadInterfaceSystems: (new LoadInterfaceSystemsAction(dispatch)).fn,
        })
    }
}
