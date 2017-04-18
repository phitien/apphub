import ProxyAction from './ProxyAction'

export default class SearchAction extends ProxyAction {
    proxyNormalize(state, payload, ...args) {
        return this.searchFn(state, payload, ...args)
    }
    searchFn(state, payload, ...args) {return state}
}
