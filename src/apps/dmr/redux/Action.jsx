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
        const breadcrumbs = []
        function* loop(n) {
            if(!n || !n.parent) yield breadcrumbs
            else {
                breadcrumbs.push({title: n.name, url: `/dmr/products/${n.id}`})
                yield* loop(n.parent)
            }
        }
        CoreAction.execute('SetBreadcrumbsAction', loop(node).next().value.reverse())
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
            header: null, serverDateTime: null, token: null,
            body: {
                sourceSystem,
                outputType,
                searchValue,
                page: {pageNo,pageSize}
            }
        }
    }
    beforeDispatch(payload) {
        const searchParams = this.searchParams
        searchParams.body.contextPathId = parseInt(payload.id) ? parseInt(payload.id) : 0
        this.util.post(configuration.api.urls.searchDataElements.format(payload), searchParams)
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
            (res) => {
                this.util.assign(payload, {loaded: true, expanded: true, info: res.data.body})
                CoreAction.execute('LoadedDataElementInfoAction', payload)
            }
        ).run()
    }
}
export class LoadedDataElementInfoAction extends CoreAction {}
export class LoadInterfaceSystemsAction extends CoreAction {
    beforeDispatch(payload) {
        this.util.query('/static/dmr/api/interface-systems.json')
        .success(
            CoreAction.fn('LoadedInterfaceSystemsAction')
        ).run()
    }
}
export class LoadedInterfaceSystemsAction extends CoreAction {}
