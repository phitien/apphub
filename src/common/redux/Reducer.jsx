import {default as CoreReducer, ConfigReducer, FalseReducer, TrueReducer} from '../../core/redux/Reducer'

export class UserLogoutActionReducer extends CoreReducer {
    get fieldName() {return 'user'}
    getData(action) {return null}
}
export class UserLoginActionReducer extends CoreReducer {
    get fieldName() {return 'user'}
}
export class LoadedPageInfoActionReducer extends CoreReducer {
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
            if (location.pathname == node.url)
                return value = node.subNodes && node.subNodes.length ? this.getTitle(node.subNodes, value) : node.title
            if (location.pathname.indexOf(node.url) >= 0)
                return value = node.subNodes && node.subNodes.length ? this.getTitle(node.subNodes, value) : node.title
            return node.subNodes && node.subNodes.length ? this.getAppName(node.subNodes, value) : value
        }, value)
    }
    getAppName(nodes, value) {
        return nodes.reduce((value, node) => {
            if (location.pathname.indexOf(node.url) >= 0)
                return value = node.app
            return node.subNodes && node.subNodes.length ? this.getAppName(node.subNodes, value) : value
        }, value)
    }
}
export class AddModalToViewActionReducer extends CoreReducer {
    get fieldName() {return 'modal'}
}
export class RemoveModalFromViewActionReducer extends CoreReducer {
    get fieldName() {return 'modal'}
    getData(action) {return null}
}
