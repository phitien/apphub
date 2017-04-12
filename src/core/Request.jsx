import axios from 'axios'
import when from 'when'
import assign from 'object-assign'

export default class REQUEST {
    get defaultHeaders() {
        return {
            'Content-Type': 'application/json'
        }
    }

    constructor(url, method) {
        method = configuration.env != 'mock' && method ? method.toLowerCase() : 'get'
        this.__options = {url, method}
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
}
