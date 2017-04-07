import Reducer from '../../core/redux/Reducer'

export class UserLogoutActionReducer extends Reducer {
    get defaultState() {
        return {user: null}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {user: null})
    }
}
export class UserLoginActionReducer extends Reducer {
    get defaultState() {
        return {user: null}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {user: action.data})
    }
}
export class LoadedPageInfoActionReducer extends Reducer {
    get defaultState() {
        return {pageInfo: [], pageTitle: 'Apps Hub', appName: 'Apps Hub'}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {
            pageInfo: action.data.body,
            pageTitle: this.getTitle(action.data.body, 'Apps Hub'),
            appName: this.getAppName(action.data.body, 'Apps Hub')
        })
    }
    getTitle(nodes, value) {
        return nodes.reduce((value, node) => {
            if (node.url == location.pathname)
                return value = node.title
            return node.subNodes && node.subNodes.length ? this.getTitle(node.subNodes, value) : value
        }, value)
    }
    getAppName(nodes, value) {
        return nodes.reduce((value, node) => {
            if (node.url == location.pathname)
                return value = node.app
            return node.subNodes && node.subNodes.length ? this.getAppName(node.subNodes, value) : value
        }, value)
    }
}
export class AddModalToViewActionReducer extends Reducer {
    get defaultState() {
        return {modal: null}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {modal: action.data})
    }
}
export class RemoveModalFromViewActionReducer extends Reducer {
    get defaultState() {
        return {modal: null}
    }
    matchedTransform(state, action) {
        return this.util.assign({}, state, {modal: null})
    }
}
