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
            height: '350px', rowHeight: 32, fixedHeader: true, fixedFooter: true,
            columns: [], data: [], currentPage: 0, totalPage: 0, pageSize: 0,
            showPagination: true, showFilters: true, showRowHover: true, stripedRows: true, showCheckboxes: false, selectable: true,
            onCellClick: () => {}, onCellHover: () => {}, onCellHoverExit: () => {},
            onRowHover: () => {}, onRowHoverExit: () => {}, onRowSelection: () => {},
            cellRenderer: function(row, col) {return <div>{row[col.field]}</div>}.bind(this),
        }
    }
    get lineHeightStyle() {return this.util.assign({}, {height: this.cmpProps.rowHeight})}
    headerCellStyle(col) {return this.util.assign(this.lineHeightStyle, {width: col.width ? col.width : 'auto'})}
    get cellStyle() {return this.util.assign(this.lineHeightStyle, {})}
    get buttonStyle() {return this.util.assign(this.lineHeightStyle, {display: 'flex', alignItem: 'center'})}

    header = () =>
        <TableHeader
            displaySelectAll={this.cmpProps.showCheckboxes}
            adjustForCheckbox={this.cmpProps.showCheckboxes}
            enableSelectAll={this.cmpProps.enableSelectAll}>
            <TableRow style={this.cellStyle}>
                {this.cmpProps.columns.map((col,i) => <TableHeaderColumn key={i} tooltip={col.tooltip}
                    style={this.headerCellStyle(col)}>{col.name}</TableHeaderColumn>)}
            </TableRow>
            {this.toobar()}
        </TableHeader>
    toobar = () =>
        <TableRow style={this.lineHeightStyle}>
            <TableHeaderColumn style={this.cellStyle}  colSpan={this.cmpProps.columns.length}>
                
            </TableHeaderColumn>)}
        </TableRow>
    body = () => //!this.data || this.data.length ? null :
        <TableBody
            displayRowCheckbox={this.cmpProps.showCheckboxes}
            deselectOnClickaway={this.cmpProps.deselectOnClickaway}
            showRowHover={this.cmpProps.showRowHover}
            stripedRows={this.cmpProps.stripedRows}
        >
          {this.cmpProps.data.map((row,i) => <TableRow style={this.lineHeightStyle} key={i} selected={row.selected}>
              {this.cmpProps.columns.map((col,j) => <TableCell style={this.cellStyle} key={j}>{this.cmpProps.cellRenderer(row,col)}</TableCell>)}
          </TableRow>)}
        </TableBody>
    footer = () =>
        <TableFooter adjustForCheckbox={this.cmpProps.showCheckboxes}>
            {this.pagination()}
        </TableFooter>
    pagination = () => //!this.cmpProps.showPagination ? null :
        <TableRow style={this.lineHeightStyle}>
            <TableCell style={this.cellStyle} colSpan={this.cmpProps.columns.length}>
                <div className='pagination'>
                    <div className='pagination-navi'>
                        <IconButton style={this.buttonStyle}><i className='material-icons'>chevron_left</i></IconButton>
                        <div className='pagination-pageInfo'>
                            <TextField type='number' min={1} style={{width: 'auto'}} defaultValue={this.cmpProps.currentPage}/>/{this.cmpProps.totalPage}
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
            <MaterialTable height={this.cmpProps.height}
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
