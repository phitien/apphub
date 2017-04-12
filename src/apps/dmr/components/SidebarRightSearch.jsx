import React from 'react'
import {Toggle} from 'material-ui'
import Component from '../../../common/components/Component'
import Connect from '../redux/Connect'

class SidebarRightSearch extends Component {
    get componentClassName() {return `sidebar-right-search`}
    onToggle(col, e, checked) {
        col.show = checked
        this.props.executeSetDataElementColumnsAction({data: this.props.dataElementColumns})
    }
    renderColumnsSelection = () =>
        <div className='data-element-table-columns-selection'>
            <div className='choices'>
                {this.props.dataElementColumns.map((item,i) =>
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
