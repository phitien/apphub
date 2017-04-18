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
          function* success(res) {
            let actions = [`ApiSuccess${me.name}`].concat(me.successActions)
            actions.map(action => action ? Action.execute(action, res) : false)
          }
          function* failure(res) {
            let actions = [`ApiFailure${me.name}`].concat(me.failureActions)
            actions.map(action => action ? Action.execute(action, res) : false)
          }
          let res = yield me.request.run()
          if (res.status < 300) yield success(res)
          else yield failure(res)
      })
    }
}
