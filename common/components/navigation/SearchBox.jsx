import React from 'react'
import Component from '../Component'

export default class SearchBox extends Component {
    get mainClassName() {return 'search-box'}
    render() {
        return <div className={this.className}>
            SearchBox
        </div>
    }
}
