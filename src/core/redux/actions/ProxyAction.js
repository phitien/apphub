import Action from './Action'

export default class ProxyAction extends Action {
    dispatchable = false
    proxyClasses = null
    proxyNormalize(state, payload, ...args) {return payload}
    beforeDispatch(payload, ...args) {
        [].concat(this.proxyClasses).map(
            klass => {
                let name = Action.getName(klass)
                Action.execute(name, this.proxyNormalize(this.getState(name), payload, ...args), ...args)
            }
        )
    }
}
