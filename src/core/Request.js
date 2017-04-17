import axios from 'axios'
import when from 'when'
import assign from 'object-assign'
import {configuration} from './Config'

export default class REQUEST {
    get defaultHeaders() {
        return {
            'Content-Type': 'application/json'
        }
    }

    constructor(url, method) {
        method = configuration.isMock() && method ? method.toLowerCase() : 'get'
        this.__options = {url, method}
        this.headers({})
    }
    execute = () => this.exe = when(axios(this.__options))
    option = (n, v) => {
        this.__options[n] = v
        return this
    }
    headers = (headers) => this.option('headers', assign(this.defaultHeaders, headers))
    url = (url) => this.option('url', url)
    data = (data) => {
        if (this.__options.method == 'get') {
            const url = this.__options.url
            return this.option('url', this.buildUrl(url, this.buildQuery(data)))
        }
        return this.option('data', data)
    }
    buildUrl = (url, query) => url.indexOf('?') >= 0 ? `${url}&${query}` : `${url}?${query}`
    buildQuery = (json) => json ? Object.keys(json).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(json[k] ? json[k] : '')}`).join('&') : ''

    __before = []
    __after = []
    __success = []
    __failure = []
    __run = (payload, ...args) => {
        args.map(fn => fn(payload))
        return this
    }
    before = (...args) => {
        this.__before = args
        return this
    }
    after = (...args) => {
        this.__after = args
        return this
    }
    success = (...args) => {
        this.__success = args
        return this
    }
    failure = (...args) => {
        this.__failure = args
        return this
    }
    run = () => {
        return this.__run(undefined, ...this.__before)
        .execute()
        .then(res => {
            try {this.__run(res, ...this.__success)} catch(e) {console.error('request:success', e)}
            return res
        })
        .catch(res => {
            try {this.__run(res, ...this.__failure)} catch(e) {console.error('request:failure', e)}
            return res
        }).then(res => {
            try {this.__run(undefined, ...this.__after)} catch(e) {console.error('request:after', e)}
            return res
        })
    }
}
