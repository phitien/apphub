import React from 'react'
import Component from '../../../../common/components/Component'
import Connect from '../../redux/Connect'
import Table from '../../../../common/components/Table'
import {Toggle, Checkbox} from 'material-ui'
import {Link} from 'react-router'

class ProductsList extends Component {
    get componentClassName() {return 'products-list'}
    get data() {return {
        data: this.props.subHierarchy ? this.props.subHierarchy.subNodes : [],
    }}
    get columns() {return this.state.columns}
    init() {
        this.state.columns = [{
            tooltip: '',
            name: 'ID',
            field: 'id',
            width: 60,
            optional: true
        }, {
            tooltip: '',
            name: 'Name',
            field: 'name',
            show: true
        }, {
            tooltip: '',
            name: 'Description',
            field: 'desc',
            show: true
        }]
    }
    onToggle(item, e, checked) {
        item.show = checked
        this.setState(this.state)
    }
    renderColumnsSelection = () => <div className='columns-selection'>
        <div className='choices'>{this.columns.filter(item => item.optional).map((item,i) => <Toggle key={i} className='choice' labelPosition='right'
            label={item.name} toggled={item.show} disabled={!item.optional}
            onToggle={this.onToggle.bind(this, item)}/>)}</div>
    </div>
    cellRenderer = (row,col) => {
        if (col.field == 'name') return <Link to={`/dmr/products/${row.id}`}>{row[col.field]}</Link>
        return <div>{row[col.field]}</div>
    }
    render = () => <div className={this.className}>
        <div className='view-settings'>
            {this.renderColumnsSelection()}
            <Checkbox className='switch-view' title='Switch view' label='View' labelPosition='left'
                style={{
                    block: {maxWidth: 250, with: 'auto'},
                }}
                checkedIcon={<i className='material-icons'>ac_unit</i>}
                uncheckedIcon={<i className='material-icons'>grid_on</i>}
              />
        </div>
        <Table
            columns={this.columns.filter(item => item.show)}
            data={this.data.data}
            cellRenderer={this.cellRenderer}
        />
    </div>
}

export default (new Connect(ProductsList)).klass
