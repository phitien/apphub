import React from 'react'
import {Toggle} from 'material-ui'
import {Style} from '../../../common/components'
import {Connect} from '../redux'

class SidebarRightSearch extends Style {
    get componentClassName() {return `sidebar-right-search`}
    onToggle(col, e, checked) {
        col.show = checked
        this.props.executeSetDataElementColumnsAction(this.props.dataElementColumns)
    }
    renderColumnsSelection = () =>
        <div className='data-element-table-columns-selection'>
            <div className='choices'>
                {this.props.dataElementColumns
                    .filter(item => item.optional)
                    .map((item,i) =>
                <Toggle key={i} className='choice' labelPosition='right'
                    label={item.name} defaultToggled={item.show} disabled={!item.optional}
                    onToggle={this.onToggle.bind(this, item)}/>)}
            </div>
        </div>
    render = () =>
        <div className={this.className}>
            <div className='sidebar-right-search-section'>
                <h4>Show/Hide columns</h4>
                {this.renderColumnsSelection()}
            </div>
        </div>
}

export default (new Connect(SidebarRightSearch)).klass
