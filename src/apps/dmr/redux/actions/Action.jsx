import Action, {CONSTANTS} from '../../../../common/redux/actions/Action'

export const DMRCONSTANTS = {
    LoadRootTreeAction: 'LoadRootTreeAction',
    LoadedRootTreeAction: 'LoadedRootTreeAction',
    LoadSubTreeAction: 'LoadSubTreeAction',
    LoadedSubTreeAction: 'LoadedSubTreeAction',
    ToggleLeftSidebarAction: 'ToggleLeftSidebarAction',
    LoadInterfaceSystemsAction: 'LoadInterfaceSystemsAction',
    LoadedInterfaceSystemsAction: 'LoadedInterfaceSystemsAction',
}

export class ToggleLeftSidebarAction extends Action {
    get type() {return DMRCONSTANTS.ToggleLeftSidebarAction}
}

export class LoadRootTreeAction extends Action {
    get type() {return DMRCONSTANTS.LoadRootTreeAction}
    beforeDispatch(data) {
        this.util.query('/static/dmr/api/tree-lv-0.json', {}, {
            success: (new LoadedRootTreeAction(this.dispatcher)).fn
        })
    }
}
export class LoadedRootTreeAction extends Action {
    get type() {return DMRCONSTANTS.LoadedRootTreeAction}
}
export class LoadSubTreeAction extends Action {
    get type() {return DMRCONSTANTS.LoadSubTreeAction}
    beforeDispatch(node, lv) {
        this.util.query(`/static/dmr/api/tree-lv-${lv}.json`, {}, {
            success: (new LoadedSubTreeAction(this.dispatcher)).fn
        })
    }
}
export class LoadedSubTreeAction extends Action {
    get type() {return DMRCONSTANTS.LoadedSubTreeAction}
}
export class LoadInterfaceSystemsAction extends Action {
    get type() {return DMRCONSTANTS.LoadInterfaceSystemsAction}
    beforeDispatch(data) {
        this.util.query('/static/dmr/api/interface-systems.json', {}, {
            success: (new LoadedInterfaceSystemsAction(this.dispatcher)).fn
        })
    }
}
export class LoadedInterfaceSystemsAction extends Action {
    get type() {return DMRCONSTANTS.LoadedInterfaceSystemsAction}
}
