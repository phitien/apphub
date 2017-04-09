import Action from '../../../core/redux/Action'

export class SwitchSidebarLeftViewAction extends Action {}
export class ToggleSidebarLeftAction extends Action {}
export class ToggleSidebarRightAction extends Action {}
export class LoadRootHierarchyAction extends Action {
    beforeDispatch(id) {
        this.util.query('/static/dmr/api/hierarchy-lv-0.json', {product: ''}, {
            success: [
                (res) => {
                    Action.run(LoadedRootHierarchyAction, res)
                    if (id) {
                        // res.data.map(node => console.log())
                    }
                },
            ]
        })
    }
}
export class LoadedRootHierarchyAction extends Action {}
export class LoadSubHierarchyAction extends Action {
    beforeDispatch(payload, lv) {
        this.util.query(`/static/dmr/api/hierarchy-lv-${lv}.json`, {product: payload.path}, {
            success: (new LoadedSubHierarchyAction()).getFn()
        })
    }
}
export class LoadedSubHierarchyAction extends Action {}
export class LoadInterfaceSystemsAction extends Action {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/interface-systems.json', {}, {
            success: (new LoadedInterfaceSystemsAction()).getFn()
        })
    }
}
export class LoadedInterfaceSystemsAction extends Action {}
export class SearchDataElementsAction extends Action {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/data-elements.json', payload, {
            success: (new SearchedDataElementsAction()).getFn()
        })
    }
}
export class SearchedDataElementsAction extends Action {}
export class LoadModelDetailAction extends Action {
    beforeDispatch(payload, lv) {
        this.util.query(`/static/dmr/api/data-elements.json`, {}, {
            success: (new LoadedModelDetailAction()).getFn()
        })
    }
}
export class LoadedModelDetailAction extends Action {}
