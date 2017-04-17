import Action from './Action'

export default class ProxyAction extends Action {
    dispatchable = false
    proxyClasses = null
    proxyNormalize(payload) {return payload}
    beforeDispatch(payload) {
        [].concat(this.proxyClasses).map(
            klass => Action.execute(klass, this.proxyNormalize(...arguments))
        )
    }
}
