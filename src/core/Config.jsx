import util from './util'

export const WINDOW = {
    configuration: {
        env: 'mock',
        showDevTool: false,
        isDebug: function() {return this.env ? this.env == 'mock' || this.env == 'dev' : true}
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
        if (this.configuration.isDebug()) console.log(this.configuration)
        return this.configuration
    }
}
