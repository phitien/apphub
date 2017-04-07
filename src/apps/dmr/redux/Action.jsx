import Action from '../../../core/redux/Action'

export class SwitchSidebarLeftViewAction extends Action {}
export class ToggleSidebarLeftAction extends Action {}
export class ToggleSidebarRightAction extends Action {}
export class LoadRootHierarchyAction extends Action {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/hierarchy-lv-0.json', {product: ''}, {
            success: (new LoadedRootHierarchyAction(this.dispatcher)).fn
        })
    }
}
export class LoadedRootHierarchyAction extends Action {}
export class LoadSubHierarchyAction extends Action {
    beforeDispatch(payload, lv) {
        this.util.query(`/static/dmr/api/hierarchy-lv-${lv}.json`, {product: payload.path}, {
            success: (new LoadedSubHierarchyAction(this.dispatcher)).fn
        })
    }
}
export class LoadedSubHierarchyAction extends Action {}
export class LoadInterfaceSystemsAction extends Action {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/interface-systems.json', {}, {
            success: (new LoadedInterfaceSystemsAction(this.dispatcher)).fn
        })
    }
}
export class LoadedInterfaceSystemsAction extends Action {}
export class SearchDataElementsAction extends Action {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/data-elements.json', payload, {
            success: (new SearchedDataElementsAction(this.dispatcher)).fn
        })
    }
}
export class SearchedDataElementsAction extends Action {}
