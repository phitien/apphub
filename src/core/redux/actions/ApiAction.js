import {put, takeLatest} from 'redux-saga'
import Action from './Action'

export default class ApiAction extends Action {
    request = null
    successActions = null
    failureActions = null
    get isApiAction() {return true}
    get apiSuccessState() {return this.getState(`ApiSuccess${this.name}`)}

    preProcess(payload, ...args) {
        this.request = this.loadRequest(payload, ...args)
        this.cache = this.loadCache(payload, ...args)
        let callback = args[args.length - 1]
        if (typeof callback == 'function') this.callback = callback
    }
    loadRequest(payload, ...args) {throw `${this.name}: No implementation of function loadRequest`}
    loadCache(payload, ...args) {return undefined}
    shouldCallApi(payload, ...args) {return true}
    runSaga() {this.store.runSaga(this.saga, this)}
    saga = function*(me) {
      yield takeLatest(me.name, function*(action) {
          const {cache, request, name, successActions, failureActions} = me
          function* success(res, request) {
            let actions = [`ApiSuccess${name}`].concat(successActions)
            actions.map(action => action ? Action.execute(action, res, request.payload) : false)
            if (me.callback) me.callback(res, request.payload)
          }
          function* failure(res, request) {
            let actions = [`ApiFailure${name}`].concat(failureActions)
            actions.map(action => action ? Action.execute(action, res, request.payload) : false)
            if (me.callback) me.callback(res, request.payload)
          }
          let res = yield cache ? cache : request.run()
          if (res.status < 300) yield success(res, request)
          else yield failure(res, request)
      })
    }
}
