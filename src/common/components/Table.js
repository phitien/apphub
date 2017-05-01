import React from 'react'
import Style from './Style'

export default class Table extends Style {
    componentClassName = 'table-view'
    state = {
        columns: this.props.columns ? this.props.columns : []
    }
    get columns() {return this.state.columns}

}
