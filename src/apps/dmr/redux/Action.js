import {Action, ApiAction, ProxyAction, SearchAction} from '../../../core/redux'

export class SearchHierarchyAction extends SearchAction {
    proxyClasses = 'ApiSuccessLoadHierarchyAction'
    searchFn(state, q) {
        let hierarchy = this.util.assign({}, state.hierarchy)
        hierarchy.searching = false
        function showhide(n, hide, arr) {
            if (!n.id) n.hide = false
            else if (arr) n.hide = !arr.includes(n)
            else n.hide = hide
            if (n.subNodes && n.subNodes.length) {
                n.subNodes.map(sn => showhide(sn, hide, arr))
            }
        }
        showhide(hierarchy, false)
        if (q) {
            hierarchy.searching = true
            let rs = []
            function traverseup(n) {
                if (n) {
                    if (!rs.includes(n)) rs.push(n)
                    traverseup(n.parent)
                }
            }
            function traversedown(n) {
                if (n.name && n.name.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
                    if (!rs.includes(n)) rs.push(n)
                    traverseup(n.parent)
                }
                if (n.subNodes && n.subNodes.length) {
                    n.subNodes.map(sn => traversedown(sn))
                }
            }
            traversedown(hierarchy)
            showhide(hierarchy, true, rs)
        }
        return {data: {body: hierarchy}}
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
export class LoadHierarchyAction extends Action {
    beforeDispatch(id, root, node) {
        if (!root) {
            root = {loaded: false, path: '', id: ''}
        }
        const me = this
        async function load(node) {
            if (!node.loaded) {
                let payload = {product: node.path, id: node.id}
                let res = await me.util.query(me.configuration.api.urls.hierarchy.format(payload), payload).run(true)
                if(res.data.body) {
                    me.util.assign(node, res.data.body, {loaded: true})
                    if (!me.util.isEmpty(node.subNodes)) {
                        node.subNodes.map(subnode => {
                            me.util.assign(subnode, {parent: node})
                            load(subnode)
                        })
                    }
                }
            }
            if (node.id == id) Action.execute(SetCurrentHierarchyAction, node)
        }
        load(root)
        Action.execute('ApiSuccessLoadHierarchyAction', {data: {body: root}})
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
