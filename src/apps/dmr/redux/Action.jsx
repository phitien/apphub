import Action from '../../../core/redux/Action'

export class SetDataElementColumnsAction extends Action {}
export class SwitchSidebarLeftViewAction extends Action {}
export class ToggleSidebarLeftAction extends Action {}
export class ToggleSidebarRightAction extends Action {}
export class SetCurrentHierarchyAction extends Action {}
export class LoadRootHierarchyAction extends Action {
    beforeDispatch(path) {
        const payload = {product: '', path: ''}
        this.util.query(configuration.api.urls.hierarchy.format(payload), payload, {
            success: (res) => {
                Action.run(LoadedRootHierarchyAction, res)
                const subNodes = this.store.getState().LoadedRootHierarchyActionReducer.hierarchy.subNodes
                if (subNodes && subNodes.length) {
                    subNodes.map(subnode => {
                        Action.run(LoadSubHierarchyAction, subnode, path)
                        if (subnode.path == path)
                            Action.run(SetCurrentHierarchyAction, subnode)
                    })
                }
            },
        })
    }
}
export class LoadedRootHierarchyAction extends Action {}
export class LoadSubHierarchyAction extends Action {
    afterLoad(node, path, res) {
        Action.run(LoadedSubHierarchyAction, res)
        if (node.path == path)
            Action.run(SetCurrentHierarchyAction, {data: node})
        const subNodes = node.subNodes
        if (subNodes && subNodes.length) {
            subNodes.map(subnode => {
                Action.run(LoadSubHierarchyAction, subnode, path)
            })
        }
    }
    beforeDispatch(node, path) {
        console.log(node, path)
        if (node.path) {
            if (!node.loaded) {
                const payload = {product: node.path, path: node.path}
                this.util.query(configuration.api.urls.hierarchy.format(payload), payload, {
                    success: (res) => {
                        this.util.assign(node, res.data.body, {loaded: true})
                        this.afterLoad(node, path, res)
                    },
                })
            }
            else {
                this.afterLoad(node, path, {data: {body: node}})
            }
        }
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
export class LoadModelDetailAction extends Action {
    beforeDispatch(payload, lv) {
        this.util.query(configuration.api.urls.dataElement.format(payload), payload, {
            success: (new LoadedModelDetailAction()).getFn()
        })
    }
}
export class LoadedModelDetailAction extends Action {}
export class SearchDataElementsAction extends Action {
    beforeDispatch(payload) {
        this.util.query(configuration.api.urls.searchDataElements.format(payload), payload, {
            success: (new SearchedDataElementsAction()).getFn()
        })
    }
}
export class SearchedDataElementsAction extends Action {}
