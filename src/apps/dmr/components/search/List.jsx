import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'
import ReactTable from 'react-table'

class List extends Component {
    get componentClassName() {return 'list'}
    get data() {return {
        data: [],
        pages: 1,
        loading: false
    }}
    render = () => <div className={this.className}>
    <ReactTable
            columns={[{
              header: 'First Name',
              accessor: 'firstName'
            }, {
              header: 'Last Name',
              id: 'lastName',
              accessor: d => d.lastName
            }, {
              header: 'Age',
              accessor: 'age'
            }]}
            manual
            defaultPageSize={10}
            showFilters={true}
            data={this.data.data}
            pages={this.data.pages}
            loading={this.data.loading}
          />
    </div>
}

export default (new DmrConnect(List)).klass
