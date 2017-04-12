import Action from '../../../core/redux/Action'

export class SetListOutputTypesAction extends Action {}
export class SetCurrentOutputModelAction extends Action {}
export class SetDataElementColumnsAction extends Action {}
export class SwitchSidebarLeftViewAction extends Action {}
export class ToggleSidebarLeftAction extends Action {}
export class ToggleSidebarRightAction extends Action {}
export class SetCurrentHierarchyAction extends Action {}
export class LoadRootHierarchyAction extends Action {
    beforeDispatch(id) {
        const payload = {product: ''}
        this.util.query(configuration.api.urls.hierarchy.format(payload), payload, {
            success: (res) => {
                Action.run(LoadedRootHierarchyAction, res)
                const subNodes = this.store.getState().LoadedRootHierarchyActionReducer.hierarchy.subNodes
                if (subNodes && subNodes.length) {
                    subNodes.map(subnode => {
                        Action.run(LoadSubHierarchyAction, subnode, id)
                        if (subnode.id == id)
                            Action.run(SetCurrentHierarchyAction, subnode)
                    })
                }
            },
        })
    }
}
export class LoadedRootHierarchyAction extends Action {}
export class LoadSubHierarchyAction extends Action {
    afterLoad(node, id, res) {
        Action.run(LoadedSubHierarchyAction, res)
        if (node.id == id)
            Action.run(SetCurrentHierarchyAction, {data: node})
        const subNodes = node.subNodes
        if (subNodes && subNodes.length) {
            subNodes.map(subnode => {
                Action.run(LoadSubHierarchyAction, subnode, id)
            })
        }
    }
    beforeDispatch(node, id) {
        if (node.id) {
            if (!node.loaded) {
                const payload = {product: node.id}
                this.util.query(configuration.api.urls.hierarchy.format(payload), payload, {
                    success: (res) => {
                        this.util.assign(node, res.data.body, {loaded: true})
                        this.afterLoad(node, id, res)
                    },
                })
            }
            else {
                this.afterLoad(node, id, {data: {body: node}})
            }
        }
    }
}
export class LoadedSubHierarchyAction extends Action {}
export class SearchDataElementsAction extends Action {
    beforeDispatch(payload) {
        this.util.assign({outputType: 'SCBML', sourceSystem: 'BTS'}, payload)
        this.util.query(configuration.api.urls.searchDataElements.format(payload), payload, {
            success: (new SearchedDataElementsAction()).getFn()
        })
    }
}
export class SearchedDataElementsAction extends Action {}
export class LoadInterfaceSystemsAction extends Action {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/interface-systems.json', {}, {
            success: (new LoadedInterfaceSystemsAction()).getFn()
        })
    }
}
export class LoadedInterfaceSystemsAction extends Action {}
export class LoadModelDetailAction extends Action {
    beforeDispatch(payload, lv) {
        this.util.query(configuration.api.urls.dataElement.format(payload), payload, {
            success: (new LoadedModelDetailAction()).getFn()
        })
    }
}
export class LoadedModelDetailAction extends Action {}
