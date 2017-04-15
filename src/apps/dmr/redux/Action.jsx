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
export class SetCurrentHierarchyAction extends CoreAction {
    beforeDispatch(node) {
        const breadcrums = []
        function* loop(n) {
            if(!n || !n.parent) yield breadcrums
            else {
                breadcrums.push({title: n.name, url: `/dmr/products/${n.id}`})
                yield* loop(n.parent)
            }
        }
        CoreAction.execute('SetBreadcrumAction', loop(node).next().value.reverse())
    }
}
export class LoadHierarchyAction extends CoreAction {
    beforeDispatch(id, root, node) {
        if (!root) {
            root = {loaded: false, path: '', id: ''}
            node = root
        }
        if (node.id == id)
            CoreAction.execute(SetCurrentHierarchyAction, node)
        if (!node.loaded) {
            const payload = {product: node.path, id: node.id}
            this.util.query(configuration.api.urls.hierarchy.format(payload), payload)
            .success(
                (res) => {
                    if(res.data.body) {
                        this.util.assign(node, res.data.body, {loaded: true})
                        const subNodes = node.subNodes
                        if (subNodes && subNodes.length) {
                            subNodes.map(subnode => {
                                this.util.assign(subnode, {parent: node})
                                CoreAction.execute('LoadHierarchyAction', id, root, subnode)
                            })
                        }
                        CoreAction.execute('LoadedHierarchyAction', {data: {body: root}})
                    }
                }
            ).run()
        }
    }
}
export class LoadedHierarchyAction extends CoreAction {}
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
            this.util.assign(this.searchParams, {contextPathId: payload.id ? payload.id : 0}))
            .success(
                CoreAction.fn('SearchedDataElementsAction')
            ).run()
    }
}
export class SearchedDataElementsAction extends CoreAction {}
export class LoadDataElementInfoAction extends CoreAction {
    beforeDispatch(payload) {
        this.util.query(configuration.api.urls.dataElement.format(payload), {elementId: payload.elementId})
        .success(
            this.callback
        ).run()
    }
}
export class LoadInterfaceSystemsAction extends CoreAction {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/interface-systems.json')
        .success(
            CoreAction.fn('LoadedInterfaceSystemsAction')
        ).run()
    }
}
export class LoadedInterfaceSystemsAction extends CoreAction {}
