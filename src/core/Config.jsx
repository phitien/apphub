import util from './util'

export default class Config {
    constructor(files) {
        if (typeof window.configuration == 'undefined') {
            window.configuration = {}
        }
        for(var i=0;i < arguments.length;i++) {
            const config = arguments[i]
            util.assignDeep(window.configuration, config)
        }
    }
}
