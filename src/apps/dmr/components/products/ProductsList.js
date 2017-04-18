import React from 'react'
import {Link} from 'react-router'
import {TableRow, TableRowColumn as TableCell} from 'material-ui/Table'
import {Style, Table, TextField, SelectField} from '../../../../common/components'
import {Connect} from '../../redux'
import Detail from './Detail'

class ProductsList extends Style {
    get componentClassName() {return 'products-list'}
    get data() {
        return {data: this.props.searchDataElementsResults.elements}
    }
    get columns() {return this.props.dataElementColumns}
    getInfo(row) {
        return this.props.dataElements ? this.props.dataElements[row.elementId] : null
    }
    fieldRenderer(row,i,col,j) {
        return <Link>{row[col.field]}</Link>
    }
    rowDetailRenderer(rowi,i) {
        let info = this.getInfo(rowi)
        return !info ? null :
        <Detail info={info} className='data-element'/>
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
                rowDetailRenderer={this.rowDetailRenderer.bind(this)}
                onCellClick={(rowIndex, cellIndex, e) => {
                    const row = e.target.closest('.row')
                    const index = row.getAttribute('data-index')
                    if (parseInt(index) == index) {
                        const row = this.data.data[index]
                        this.props.executeLoadDataElementInfoAction(row)
                        row.expanded = !row.expanded
                        this.refresh()
                    }
                }}
            />
        </div>
}

export default (new Connect(ProductsList)).klass
