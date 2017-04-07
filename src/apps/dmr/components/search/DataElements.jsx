import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'
import ReactTable from 'react-table'

class DataElements extends Component {
    get componentClassName() {return 'data-elements'}
    get data() {return {
        data: this.props.searchDataElementsResults ? this.props.searchDataElementsResults.body : [],
    }}
    render = () => <div className={this.className}>
    <ReactTable
            columns={[{
              header: 'ID',
              accessor: 'id'
            }, {
              header: 'Name',
              accessor: 'name'
            }]}
            showPagination={false}
            defaultPageSize={10}
            showFilters={true}
            data={this.data.data}
          />
    </div>
}

export default (new DmrConnect(DataElements)).klass
