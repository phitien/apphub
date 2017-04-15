import React from 'react'
import {Link} from 'react-router'
import {TableRow, TableRowColumn as TableCell} from 'material-ui/Table'
import {Style, Table, TextField, SelectField} from '../../../../common/components'
import {Connect} from '../../redux'
import Detail from './Detail'

class ProductsList extends Style {
    get componentClassName() {return 'products-list'}
    get data() {return {data: this.props.searchDataElementsResults}}
    get columns() {return this.props.dataElementColumns}
    fieldRenderer(row,i,col,j) {
        return <Link>{row[col.field]}</Link>
    }
    rowDetailRenderer(rowi,i) {
        return !rowi.loaded || !rowi.info || !rowi.expanded ? null :
        <Detail info={rowi.info}/>
    }
    onSearchFieldChange = (e) => this.props.executeSetCurrentSearchValueAction(e.target.value, () => {
        this.props.executeSearchDataElementsAction({id: this.route.params.id})
    })
    onOutputSelectChange = (e, index, value) => this.props.executeSetCurrentOutputTypeAction(value, () => {
        this.props.executeSearchDataElementsAction({id: this.route.params.id})
    })
    onPageChange = (pageNo) => this.props.executeSetCurrentPageNoAction(pageNo, () => {
        this.props.executeSearchDataElementsAction({id: this.route.params.id})
    })
    onPageSizeChange = (pageSize) => {
        this.props.executeSetCurrentPageSizeAction(pageSize, () => {
            this.props.executeSearchDataElementsAction({id: this.route.params.id})
        })
    }
    render = () =>
        <div className={this.className}>
            <div className='view-toolbar'>
                <TextField className='seach-field'
                    floatingLabelText='Name, description, xpath'
                    hintText='Search for name, description, xpath'
                    onChange={this.onSearchFieldChange}/>
                <SelectField source={this.props.listOutputTypes}
                    floatingLabelText='Output type'
                    onChange={this.onOutputSelectChange}
                    value={this.props.currentOutputType}/>
                <SelectField source={this.props.listSourceSystems}
                    floatingLabelText='Source system'
                    onChange={this.onSourceSystemChange}
                    value={this.props.currentSourceSystem}/>
            </div>
            <Table fixedHeader={true} fixedFooter={true}
                columns={this.columns.filter(item => item.show)}
                data={this.data.data}
                pageSize={this.props.currentPageSize} onPageChange={this.onPageChange}
                currentPage={this.props.currentPageNo} onPageSizeChange={this.onPageSizeChange}
                fieldRenderer={this.fieldRenderer}
                rowDetailRenderer={this.rowDetailRenderer}
                onCellClick={(rowIndex, cellIndex, e) => {
                    const target = e.target.closest('.output-models')
                    const row = this.data.data[rowIndex] ? this.data.data[rowIndex] : this.data.data[rowIndex - 1]
                    const callback = (res) => {
                        if (res  && res.data && res.data.body) {
                            this.util.assign(row, {loaded: true, expanded: false, info: res.data.body})
                        }
                        if (!target) {
                            const newState = !row.expanded
                            this.data.data.map(row => row.expanded = false)
                            row.expanded = newState
                            this.setState(this.state)
                        }
                    }
                    if (!row.loaded) {
                        this.props.executeLoadDataElementInfoAction(row, callback)
                    }
                    else {
                        callback()
                    }
                }}
            />
        </div>
}

export default (new Connect(ProductsList)).klass
