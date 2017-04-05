import Action, {CONSTANTS} from '../../../../common/redux/actions/Action'

export const DMRCONSTANTS = {
    LOAD_ROOT: 'LOAD_ROOT',
    LOADED_ROOT: 'LOADED_ROOT'
}

export class LoadRootAction extends Action {
    get type() {return DMRCONSTANTS.LOAD_ROOT}
    beforeDispatch = (data) => {
        this.util.query('/static/api/root.json', {}, {
            success: (new LoadedRootAction(this.dispatcher)).fn
        })
    }
}
export class LoadedRootAction extends Action {
    get type() {return DMRCONSTANTS.LOADED_ROOT}
}
