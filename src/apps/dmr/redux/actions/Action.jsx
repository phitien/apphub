import Action from '../../../../common/redux/actions/Action'

export class SwitchSidebarLeftViewAction extends Action {}
export class ToggleSidebarLeftAction extends Action {}
export class ToggleSidebarRightAction extends Action {}
export class LoadRootHierarchyAction extends Action {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/hierarchy-lv-0.json', {}, {
            success: (new Action(this.dispatcher, 'LoadedRootHierarchyAction')).fn
        })
    }
}
export class LoadSubHierarchyAction extends Action {
    beforeDispatch(node, lv) {
        this.util.query(`/static/dmr/api/hierarchy-lv-${lv}.json`, {}, {
            success: (new Action(this.dispatcher, 'LoadedSubHierarchyAction')).fn
        })
    }
}
export class LoadInterfaceSystemsAction extends Action {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/interface-systems.json', {}, {
            success: (new Action(this.dispatcher, 'LoadedInterfaceSystemsAction')).fn
        })
    }
}
export class SearchDataElementsAction extends Action {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/data-elements.json', {}, {
            success: (new Action(this.dispatcher, 'SearchedDataElementsAction')).fn
        })
    }
}
