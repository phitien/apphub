import {browserHistory} from 'react-router'
import lodash from 'lodash'
import moment from 'moment'
import assign from 'object-assign'
import format from 'string-format'
import uuid from 'uuid/v1'
import assignDeep from 'object-assign-deep'
import REQUEST from './Request'
import cookie from './cookie'
import user from './user'

format.extend(String.prototype)

class Util {
    get user() {return user}
    get assign() {return assign}
    get format() {return format}
    get uuid() {return uuid}
    get assignDeep() {return assignDeep}
    get lodash() {return lodash}
    get history() {return browserHistory}
    get cookie() {return cookie}

    get hash() {return this.extractPairs((location.hash ? location.hash : '#').slice(1))}
    get queries() {return this.extractPairs((location.search ? location.search : '?').slice(1))}
    extractPairs = (str) => {
        let rs = {}
        let pairs = str.split('&')
        for (var i = 0; i < pairs.length; i++) {
            let pair = pairs[i]
            if (pair.indexOf('=') > 0) {
                pair = pair.split('=')
                rs[pair[0]] = pair[1]
            }
            else rs[pair] = true
        }
        return rs
    }
    getQueryValue = name => {
        var url = location.href
        var name = name.replace(/[\[\]]/g, '\\$&')
        var regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
            results = regex.exec(url)
        if (!results) return null
        if (!results[2]) return ''
        return decodeURIComponent(results[2].replace(/\+/g, ' '))
    }
    isEmpty = o => lodash.isEmpty(o)
    isNumber = o => typeof o == 'number' || (o && parseFloat(o.toString().replace(/,/g,'')))
    numberOf = o => typeof o == 'number' ? o : o && parseFloat(o.toString().replace(/,/g,'')) ? parseFloat(o.toString().replace(/,/g,'')) : 0
    valueOf = (o, d) => this.isEmpty(o) ? d : o
    amountOf = (o) => this.numberWithCommas(o)
    dateOf = o => moment(o).format('MMMM Do YYYY')
    random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
    exclude = (origin, excludes) => {
        const props = {}
        Object.keys(origin).map(k => {
            if (origin.hasOwnProperty(k) && excludes.indexOf(k) < 0) {
                this.assign(props, {[k]: origin[k]})
            }
        })
        return props
    }

    request = (url, method, data, opts) => {
        if (url) {
            function run(o, payload) {
                if (typeof o == 'function') o(payload)
                else if (Array.isArray(o)) o.map(f => run(f, payload))
            }
            opts = this.assign({}, {
                beforeExecute: () => {},
                afterExecute: () => {},
                success: (res) => {},
                failure: (res) => {}
            }, opts)
            run(opts.beforeExecute)
            return new REQUEST(url, method).data(data).execute()
            .then(res => {
                try {run(opts.afterExecute)} catch(e) {console.log('request:afterExecute', e)}
                try {run(opts.success, res)} catch(e) {console.log('request:success', e)}
                return res
            })
            .catch(res => {
                try {run(opts.afterExecute)} catch(e) {console.log('request:afterExecute', e)}
                try {run(opts.failure, res)} catch(e) {console.log('request:failure', e)}
                return res
            })
        }
        throw 'url is missing'
    }
    query = (url, data, opts) => this.request(url, 'GET', data, opts)
    post = (url, data, opts) => this.request(url, 'POST', data, opts)
    update = (url, data, opts) => this.request(url, 'PUT', data, opts)
    remove = (url, data, opts) => this.request(url, 'DELETE', data, opts)
    options = (url, data, opts) => this.request(url, 'OPTIONS', data, opts)

    newTab = link => window.open(link, '_blank')
    redirect = link => window.open(link)
    addJsScript = (src, id, innerHTML) => this.appendTag('script', {src}, id, innerHTML)
    addCssLink = (href, id) => this.addLink(href, {type: 'text/css',rel: 'stylesheet',}, id)
    addLink = (href, props, id) => this.appendTag('link', {href, ...props}, id)
    addMeta = (name, content, id) => this.appendTag('meta', {name, content}, id)
    appendTag = (tagName, props, id, innerHTML) => {
        if (typeof document == 'undefined' || document.getElementById(id)) return
        let tags    = document.getElementsByTagName(tagName),
            last    = tags[tags.length - 1],
            tag     = document.createElement(tagName)
        tag.id  = id
        Object.keys(props).map((k) => {
            if (props[k]) tag[k] = props[k]
        })
        if (innerHTML) try {tag.innerHTML = innerHTML} catch(e) {}
        last.parentNode.insertBefore(tag, last.nextSibling)
    }
}
export default new Util()
