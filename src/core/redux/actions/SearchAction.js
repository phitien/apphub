import ProxyAction from './ProxyAction'

export default class SearchAction extends ProxyAction {
    proxyNormalize(payload) {return this.searchFn(action.state, ...arguments)}
    searchFn(state, payload) {return state}
}
