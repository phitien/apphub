import {Action, ApiAction, ProxyAction, SearchAction} from '../../../core/redux'

export class SearchHierarchyAction extends SearchAction {
    proxyClasses = 'ApiSuccessLoadHierarchyAction'
    search(state, q) {
        if (!q) return []
        const rs = []
        function traverseup(n, marked) {
            if (n) {
                if (rs.indexOf(n) < 0) rs.push(n)
                traverseup(n.parent, marked)
            }
        }
        function traversedown(n) {
            n.marked = n.name && n.name.toLowerCase().indexOf(q.toLowerCase()) >= 0
            if (n.marked) {
                if (rs.indexOf(n) < 0) rs.push(n)
                traverseup(n.parent, n.marked)
            }
            if (n.subNodes && n.subNodes.length) {
                n.subNodes.map(sn => traversedown(sn))
            }
        }
        traversedown(this.util.assign({}, state.hierarchy))
        return rs
    }
}
export class SetCurrentOutputTypeAction extends Action {}
export class SetCurrentSourceSystemAction extends Action {}
export class SetListOutputTypesAction extends Action {}
export class SetListSourceSystemsAction extends Action {}
export class SetDataElementColumnsAction extends Action {}
export class SwitchSidebarLeftViewAction extends Action {}
export class SetCurrentHierarchyAction extends ProxyAction {
    proxyClasses = 'SetBreadcrumbsAction'
    proxyNormalize(node) {
        const breadcrumbs = []
        function* loop(n) {
            if(!n || !n.parent) yield breadcrumbs
            else {
                breadcrumbs.push({title: n.name, url: `/dmr/products/${n.id}`})
                yield* loop(n.parent)
            }
        }
        return loop(node).next().value.reverse()
    }
}
export class LoadHierarchyAction extends ApiAction {
    getRequest(id, root, node) {
        if (!root) {
            root = {loaded: false, path: '', id: ''}
            node = root
        }
        if (node.id == id)
            Action.execute(SetCurrentHierarchyAction, node)
        if (!node.loaded) {
            const payload = {product: node.path, id: node.id}
            return this.util.query(this.configuration.api.urls.hierarchy.format(payload), payload)
        }
    }
}
export class SearchDataElementsAction extends ApiAction {
    get searchParams() {
        const states = this.getStates()
        const outputType = states.currentOutputType
        const sourceSystem = states.currentSourceSystem
        const searchValue = states.currentSearchValue
        const pageNo = states.currentPageNo
        const pageSize = states.currentPageSize
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
    getRequest(payload) {
        const searchParams = this.searchParams
        searchParams.body.contextPathId = parseInt(payload.id) ? parseInt(payload.id) : 0
        return this.util.post(this.configuration.api.urls.searchDataElements.format(payload), searchParams)
    }
}
export class LoadDataElementInfoAction extends ApiAction {
    getRequest(payload) {
        return this.util.query(this.configuration.api.urls.dataElement.format(payload), {elemId: payload.elementId})
    }
}
