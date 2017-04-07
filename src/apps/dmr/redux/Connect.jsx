import Connect from '../../../common/redux/Connect'
import {
    LoadRootHierarchyAction,
    LoadSubHierarchyAction,
    ToggleSidebarLeftAction, ToggleSidebarRightAction,
    LoadInterfaceSystemsAction,
    SwitchSidebarLeftViewAction,
    SearchDataElementsAction,
} from './actions/Action'

export default class DmrConnect extends Connect {
    getActions(dispatch, ownProps) {
        return this.util.assign({}, super.getActions(dispatch, ownProps), {
            searchDataElements: (new SearchDataElementsAction(dispatch)).fn,
            switchSidebarLeftView: (new SwitchSidebarLeftViewAction(dispatch)).fn,
            loadRootHierarchy: (new LoadRootHierarchyAction(dispatch)).fn,
            loadSubHierarchy: (new LoadSubHierarchyAction(dispatch)).fn,
            toggleSidebarLeft: (new ToggleSidebarLeftAction(dispatch)).fn,
            toggleSidebarRight: (new ToggleSidebarRightAction(dispatch)).fn,
            loadInterfaceSystems: (new LoadInterfaceSystemsAction(dispatch)).fn,
        })
    }
}
