import Action, {CONSTANTS} from '../../../../common/redux/actions/Action'

export const DMRCONSTANTS = {
    LOAD_ROOT: 'LOAD_ROOT',
    LOADED_ROOT: 'LOADED_ROOT',
    TOOGLE_LEFT_SIDEBAR: 'TOOGLE_LEFT_SIDEBAR'
}

export class LoadRootAction extends Action {
    get type() {return DMRCONSTANTS.LOAD_ROOT}
    beforeDispatch = (data) => {
        this.util.query('/static/api/tree.json', {}, {
            success: (new LoadedRootAction(this.dispatcher)).fn
        })
    }
}
export class LoadedRootAction extends Action {
    get type() {return DMRCONSTANTS.LOADED_ROOT}
}
export class ToggleLeftSidebarAction extends Action {
    get type() {return DMRCONSTANTS.TOOGLE_LEFT_SIDEBAR}
}
