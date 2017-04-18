import {put, takeLatest} from 'redux-saga'
import Action from './Action'

export default class ApiAction extends Action {
    request = null
    successActions = null
    failureActions = null
    get isApiAction() {return true}
    preProcess(payload) {this.request = this.getRequest(...arguments)}
    getRequest(payload) {throw `${this.name}: No implementation of function getRequest`}
    runSaga() {this.store.runSaga(this.saga, this)}
    saga = function*(me) {
      yield takeLatest(me.name, function*(action) {
          const {request, name, successActions, failureActions} = me
          function* success(res, request) {
            let actions = [`ApiSuccess${name}`].concat(successActions)
            actions.map(action => action ? Action.execute(action, res, request.payload) : false)
          }
          function* failure(res, request) {
            let actions = [`ApiFailure${name}`].concat(failureActions)
            actions.map(action => action ? Action.execute(action, res, request.payload) : false)
          }
          let res = yield request.run()
          if (res.status < 300) yield success(res, request)
          else yield failure(res, request)
      })
    }
}
