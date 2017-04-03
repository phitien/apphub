import {Dispatcher} from 'flux';

const dispatcher = new Dispatcher({
    logLevel: 'All'
})

class Action {
    dispatch = (type, data) => dispatcher.dispatch({type, data})
    error = (type, error) => dispatcher.dispatch({type, error})
}

export default new Action()
export dispatcher
