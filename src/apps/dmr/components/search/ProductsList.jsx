import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'
import ReactTable from 'react-table'
import {Toggle} from 'material-ui'

class ProductsList extends Component {
    get componentClassName() {return 'products-list'}
    get data() {return {
        data: this.props.subHierarchy ? this.props.subHierarchy.subNodes : [],
    }}
    get columns() {return this.state.columns}
    init() {
        this.state.columns = [{
            header: 'ID',
            accessor: 'id',
            optional: true
        }, {
            header: 'Name',
            accessor: 'name',
            show: true
        }, {
            header: 'Description',
            accessor: 'desc',
            show: true
        }]
    }
    onToggle(item, e, checked) {
        item.show = checked
        this.setState(this.state)
    }
    renderColumnsSelection = () => <div className='columns-selection'>
        <div className='choices'>{this.columns.filter(item => item.optional).map((item,i) => <Toggle key={i} className='choice' labelPosition='right'
            label={item.header} toggled={item.show} disabled={!item.optional}
            onToggle={this.onToggle.bind(this, item)}/>)}</div>
    </div>
    render = () => <div className={this.className}>
        {this.renderColumnsSelection()}
        <ReactTable showPagination={true} defaultPageSize={10} showFilters={true}
            columns={this.columns.filter(item => item.show)}
            data={this.data.data}
        />
    </div>
}

export default (new DmrConnect(ProductsList)).klass
