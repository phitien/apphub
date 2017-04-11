import React from 'react'
import {Table as MaterialTable, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn as TableCell}
  from 'material-ui/Table'
import {IconButton} from 'material-ui'
import Component from './Component'
import TextField from './TextField'

export default class Table extends Component {
    get componentClassName() {return 'table'}
    get cmpProps() {
        return this.util.assignDeep(this.defaultProps, this.props)
    }
    get defaultProps() {
        return {
            showHeader: true, showFooter: true,
            height: '350px', rowHeight: 32, fixedHeader: true, fixedFooter: true,
            columns: [], data: [], currentPage: 0, totalPage: 0, pageSize: 0,
            showPagination: true, showFilters: true, showRowHover: true, stripedRows: true, showCheckboxes: false, selectable: true,
            onCellClick: (rowIndex, cellIndex, e) => {
                if (!e.target.closest('.output-models') && this.cmpProps.rowDetailRenderer) {
                    const row = this.cmpProps.data[rowIndex] ? this.cmpProps.data[rowIndex] : this.cmpProps.data[rowIndex - 1]
                    const newState = !row.expanded
                    this.cmpProps.data.map(row => row.expanded = false)
                    row.expanded = newState
                    this.setState(this.state)
                }
            }, onCellHover: () => {}, onCellHoverExit: () => {},
            onRowHover: () => {}, onRowHoverExit: () => {},
            onRowSelection: (rows) => {},
            fieldRenderer: function(row,i,col,j) {return <a>{row && row[col.field] ? row[col.field].toString() : ''}</a>},
            cellRenderer: function(row,i,col,j) {return <TableCell key={j} className={`cell${j}`} style={this.cellStyle(col)}>{this.cmpProps.fieldRenderer.call(this,row,i,col,j)}</TableCell>},
            rowRenderer: function(row, i) {
                const rs = [<TableRow key={this.cmpProps.renderRowDetail ? 2*i : i} className={`row${i}`} style={this.lineStyle} selected={row.selected}>
                    {this.cmpProps.columns.map((col,j) => this.cmpProps.cellRenderer.call(this,row,i,col,j))}
                </TableRow>]
                if (row.expanded && this.cmpProps.rowDetailRenderer)
                    rs.push(<TableRow key={2*i+1} className={`row-detail row-detail-${i}`} style={this.util.assign(this.lineStyle, {display: row.expanded ? '' : 'none'})}>
                        <TableCell style={this.cellStyle()} colSpan={this.cmpProps.columns.length}>
                            {this.cmpProps.rowDetailRenderer.call(this,row,i)}
                        </TableCell>
                    </TableRow>)
                return rs
            },
        }
    }
    get lineStyle() {return this.util.assign({}, {height: this.cmpProps.rowHeight})}
    cellStyle(col) {return this.util.assign(this.lineStyle, {width: col && col.width ? col.width : 'auto'})}
    get buttonStyle() {return this.util.assign(this.lineStyle, {display: 'flex', alignItem: 'center'})}

    header = () =>
        <TableHeader style={{display: !this.cmpProps.showHeader ? 'none' : ''}}
            displaySelectAll={this.cmpProps.showCheckboxes}
            adjustForCheckbox={this.cmpProps.showCheckboxes}
            enableSelectAll={this.cmpProps.enableSelectAll}>
            <TableRow style={this.lineStyle}>
                {this.cmpProps.columns.map((col,i) => <TableHeaderColumn key={i} tooltip={col.tooltip}
                    style={this.cellStyle(col)}>{col.name}</TableHeaderColumn>)}
            </TableRow>
        </TableHeader>
    body = () =>
        <TableBody style={{display: !this.cmpProps.data ? 'none' : ''}}
            displayRowCheckbox={this.cmpProps.showCheckboxes}
            deselectOnClickaway={this.cmpProps.deselectOnClickaway}
            showRowHover={this.cmpProps.showRowHover}
            stripedRows={this.cmpProps.stripedRows}
        >
          {this.cmpProps.data.map((row,i) => this.cmpProps.rowRenderer.call(this,row,i))}
        </TableBody>
    footer = () =>
        <TableFooter style={{display: !this.cmpProps.showFooter ? 'none' : ''}}
            adjustForCheckbox={this.cmpProps.showCheckboxes}>
            {this.pagination()}
        </TableFooter>
    pagination = () =>
        <TableRow style={this.util.assign(this.lineStyle, {display: !this.cmpProps.showPagination ? 'none' : ''})}>
            <TableCell style={this.cellStyle()} colSpan={this.cmpProps.columns.length}>
                <div className='pagination'>
                    <div className='pagination-navi'>
                        <IconButton style={this.buttonStyle}><i className='material-icons'>chevron_left</i></IconButton>
                        <div className='pagination-pageInfo'>
                            <TextField type='number' min={1} style={{width: 'auto'}} defaultValue={this.cmpProps.currentPage}/>
                        </div>
                        <IconButton style={this.buttonStyle}><i className='material-icons'>chevron_right</i></IconButton>
                    </div>
                    <div className='pagination-pagesize'>
                        <TextField type='number' min={10} style={{width: 'auto'}} defaultValue={this.cmpProps.pageSize}/>/page
                    </div>
                </div>
            </TableCell>
        </TableRow>

    render = () =>
        <div className={this.className}>
            <MaterialTable height={this.cmpProps.height} style={{display: !this.cmpProps.data ? 'none' : ''}}
                fixedHeader={this.cmpProps.fixedHeader} fixedFooter={this.cmpProps.fixedFooter}
                selectable={this.cmpProps.selectable} multiSelectable={this.cmpProps.multiSelectable}
                onCellClick={this.cmpProps.onCellClick} onCellHover={this.cmpProps.onCellHover}
                onCellHoverExit={this.cmpProps.onCellHoverExit} onRowHover={this.cmpProps.onRowHover}
                onRowHoverExit={this.cmpProps.onRowHoverExit} onRowSelection={this.cmpProps.onRowSelection}
                >
                {this.header()}
                {this.body()}
                {this.footer()}
            </MaterialTable>
        </div>
}
