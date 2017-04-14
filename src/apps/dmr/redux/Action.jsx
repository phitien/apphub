import {Action as CoreAction} from '../../../core/redux'

export class SetCurrentSearchValueAction extends CoreAction {}
export class SetCurrentPageNoAction extends CoreAction {}
export class SetCurrentPageSizeAction extends CoreAction {}
export class SetCurrentOutputTypeAction extends CoreAction {}
export class SetCurrentSourceSystemAction extends CoreAction {}
export class SetListOutputTypesAction extends CoreAction {}
export class SetListSourceSystemsAction extends CoreAction {}
export class SetDataElementColumnsAction extends CoreAction {}
export class SwitchSidebarLeftViewAction extends CoreAction {}
export class ToggleSidebarLeftAction extends CoreAction {}
export class ToggleSidebarRightAction extends CoreAction {}
export class SetCurrentHierarchyAction extends CoreAction {}
export class LoadRootHierarchyAction extends CoreAction {
    beforeDispatch(id) {
        const payload = {product: ''}
        this.util.query(configuration.api.urls.hierarchy.format(payload), payload, {
            success: (res) => {
                if (res && res.data && res.data.body) {
                    const subNodes = res.data.body.subNodes
                    if (subNodes && subNodes.length) {
                        subNodes.map(subnode => {
                            CoreAction.run(LoadSubHierarchyAction, subnode, id)
                            if (subnode.id == id)
                                CoreAction.run(SetCurrentHierarchyAction, subnode)
                        })
                    }
                    CoreAction.run(LoadedRootHierarchyAction, res)
                }
            },
        })
    }
}
export class LoadedRootHierarchyAction extends CoreAction {}
export class LoadSubHierarchyAction extends CoreAction {
    afterLoad(node, id, res) {
        CoreAction.run(LoadedSubHierarchyAction, res)
        if (node.id == id)
            CoreAction.run(SetCurrentHierarchyAction, {data: node})
        const subNodes = node.subNodes
        if (subNodes && subNodes.length) {
            subNodes.map(subnode => {
                CoreAction.run(LoadSubHierarchyAction, subnode, id)
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
export class LoadedSubHierarchyAction extends CoreAction {}
export class SearchDataElementsAction extends CoreAction {
    get searchParams() {
        const outputType = this.store.getState().SetCurrentOutputTypeActionReducer.currentOutputType
        const sourceSystem = this.store.getState().SetCurrentSourceSystemActionReducer.currentSourceSystem
        const searchValue = this.store.getState().SetCurrentSearchValueActionReducer.currentSearchValue
        const pageNo = this.store.getState().SetCurrentPageNoActionReducer.currentPageNo
        const pageSize = this.store.getState().SetCurrentPageSizeActionReducer.currentPageSize
        return {
            sourceSystem,
            outputType,
            searchValue,
            page: {pageNo,pageSize}
        }
    }
    beforeDispatch(payload) {
        this.util.post(configuration.api.urls.searchDataElements.format(payload),
            this.util.assign(this.searchParams, {contextPathId: payload.id ? payload.id : 0}), {
            success: (new SearchedDataElementsAction()).getFn()
        })
    }
}
export class SearchedDataElementsAction extends CoreAction {}
export class LoadDataElementInfoAction extends CoreAction {
    beforeDispatch(payload) {
        this.util.query(configuration.api.urls.dataElement.format(payload), {elementId: payload.elementId}, {
            success: this.callback
        })
    }
}
export class LoadInterfaceSystemsAction extends CoreAction {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/interface-systems.json', {}, {
            success: (new LoadedInterfaceSystemsAction()).getFn()
        })
    }
}
export class LoadedInterfaceSystemsAction extends CoreAction {}
