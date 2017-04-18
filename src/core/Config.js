import util from './util'

export const WINDOW = {
    configuration: {
        env: 'mock',
        showDevTool: false,
        getEnv: function() {return
            window != undefined && window.configuration && window.configuration.env ?
            window.configuration.env : this.env
        },
        isDebug: function() {
            let env = this.getEnv()
            return env ? env == 'mock' || env == 'dev' : true
        },
        isMock: function() {return this.getEnv() == 'mock'},
    }
}
export const configuration = WINDOW.configuration
export class Config {
    configuration = {}
    constructor() {
        for(var i=0;i < arguments.length;i++) {
            const config = arguments[i]
            util.assign(WINDOW.configuration, config)
        }
        this.configuration = WINDOW.configuration
    }
    all() {
        // if (this.configuration.isDebug()) console.log(this.configuration)
        return this.configuration
    }
}
