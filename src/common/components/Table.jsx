import React from 'react'
import {Table as MaterialTable, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn as TableCell}
  from 'material-ui/Table'
import {TextField, IconButton} from 'material-ui'
import Component from './Component'

export default class Table extends Component {
    get componentClassName() {return 'table'}
    get tableProps() {
        return this.util.assign(this.defaultProps, this.props)
    }
    get defaultProps() {
        return {
            height: '350px', rowHeight: 32, fixedHeader: true, fixedFooter: true,
            columns: [], data: [], currentPage: 0, totalPage: 0, pageSize: 0,
            showPagination: true, showFilters: true, showRowHover: true, stripedRows: true, showCheckboxes: false, selectable: true,
            onCellClick: () => {}, onCellHover: () => {}, onCellHoverExit: () => {},
            onRowHover: () => {}, onRowHoverExit: () => {}, onRowSelection: () => {},
            cellRenderer: function(row, col) {return <div>{row[col.field]}</div>}.bind(this),
        }
    }
    get cellStyle() {return this.util.assign({}, {height: this.tableProps.rowHeight})}

    pagination = () => //!this.tableProps.showPagination ? null :
        <TableRow style={this.cellStyle}>
            <TableCell style={this.cellStyle} colSpan={this.tableProps.columns.length}>
                <div className='pagination'>
                    <div className='pagination-navi'>
                        <IconButton><i className='material-icons'>chevron_left</i></IconButton>
                        <div className='pagination-pageInfo'>
                            <TextField type='number' min={1} name='current_page' style={{width: 'auto'}} defaultValue={this.tableProps.currentPage}/>/{this.tableProps.totalPage}
                        </div>
                        <IconButton><i className='material-icons'>chevron_right</i></IconButton>
                    </div>
                    <div className='pagination-pagesize'>
                        <TextField type='number' min={10} name='page-size' style={{width: 'auto'}} defaultValue={this.tableProps.pageSize}/>/page
                    </div>
                </div>
            </TableCell>
        </TableRow>
    filters = () => //!this.tableProps.showFilters ? null :
        <TableRow style={this.cellStyle}>
            {this.tableProps.columns.map((col,i) =>
            <TableHeaderColumn style={this.cellStyle} key={i} tooltip={col.tooltip}>
                <TextField hintText={`Enter ${col.name}`} fullWidth={true}/>
            </TableHeaderColumn>)}
        </TableRow>
    header = () =>
        <TableHeader
            displaySelectAll={this.tableProps.showCheckboxes}
            adjustForCheckbox={this.tableProps.showCheckboxes}
            enableSelectAll={this.tableProps.enableSelectAll}>
            <TableRow style={this.cellStyle}>
                {this.tableProps.columns.map((col,i) => <TableHeaderColumn style={this.cellStyle} key={i} tooltip={col.tooltip}
                    style={this.util.assign({}, {width: col.width ? col.width : 'auto'})}>{col.name}</TableHeaderColumn>)}
            </TableRow>
            {this.filters()}
        </TableHeader>
    body = () => //!this.data || this.data.length ? null :
        <TableBody
            displayRowCheckbox={this.tableProps.showCheckboxes}
            deselectOnClickaway={this.tableProps.deselectOnClickaway}
            showRowHover={this.tableProps.showRowHover}
            stripedRows={this.tableProps.stripedRows}
        >
          {this.tableProps.data.map((row,i) => <TableRow style={this.cellStyle} key={i} selected={row.selected}>
              {this.tableProps.columns.map((col,j) => <TableCell style={this.cellStyle} key={j}>{this.tableProps.cellRenderer(row,col)}</TableCell>)}
          </TableRow>)}
        </TableBody>
    footer = () =>
        <TableFooter adjustForCheckbox={this.tableProps.showCheckboxes}>
            {this.pagination()}
        </TableFooter>
    render = () =>
        <div className={this.className}>
            <MaterialTable height={this.tableProps.height}
                fixedHeader={this.tableProps.fixedHeader} fixedFooter={this.tableProps.fixedFooter}
                selectable={this.tableProps.selectable} multiSelectable={this.tableProps.multiSelectable}
                onCellClick={this.tableProps.onCellClick} onCellHover={this.tableProps.onCellHover}
                onCellHoverExit={this.tableProps.onCellHoverExit} onRowHover={this.tableProps.onRowHover}
                onRowHoverExit={this.tableProps.onRowHoverExit} onRowSelection={this.tableProps.onRowSelection}
                >
                {this.header()}
                {this.body()}
                {this.footer()}
            </MaterialTable>
        </div>
}
