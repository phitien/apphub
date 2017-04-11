import React from 'react'
import {Toggle} from 'material-ui'
import Component from '../../../common/components/Component'
import Connect from '../redux/Connect'
import SelectField from '../../../common/components/SelectField'

class SidebarRightSearch extends Component {
    get componentClassName() {return `sidebar-right-search`}
    get columns() {return this.props.dataElementColumns}
    onToggle(item, e, checked) {
        item.show = checked
        this.setState(this.state)
    }
    renderColumnsSelection = () =>
        <div className='data-element-table-columns-selection'>
            <div className='choices'>
                {this.columns.filter(item => item.optional).map((item,i) =>
                <Toggle key={i} className='choice' labelPosition='right'
                    label={item.name} toggled={item.show} disabled={!item.optional}
                    onToggle={this.onToggle.bind(this, item)}/>)}
            </div>
        </div>
    render = () =>
        <div className={this.className}>
            <div className='sidebar-right-search-section'>
                <h4>Select output type</h4>
                <SelectField source={this.props.listOutputTypes}
                    value={this.props.currentOutputType}
                    fullWidth={true}
                    labelStyle={{fontSize: '13px', color: '#ffffff'}}/>
            </div>
            <div className='sidebar-right-search-section'>
                <h4>Show/Hide columns</h4>
                {this.renderColumnsSelection()}
            </div>
        </div>
}

export default (new Connect(SidebarRightSearch)).klass
