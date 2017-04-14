import React from 'react'
import {Table as MaterialTable, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn as TableCell}
  from 'material-ui/Table'
import {IconButton} from 'material-ui'
import Style from './Style'
import TextField from './TextField'

export default class Table extends Style {
    get componentClassName() {return 'table'}
    get themeProps() {return [
        'allRowsSelected', 'bodyStyle', 'children', 'className',
        'fixedFooter', 'fixedHeader', 'footerStyle', 'headerStyle',
        'height', 'multiSelectable', 'onCellClick', 'onCellHover',
        'onCellHoverExit', 'onRowHover', 'onRowHoverExit', 'onRowSelection',
        'selectable', 'wrapperStyle',
    ]}
    get defaultProps() {
        return {
            showHeader: true, showFooter: true,
            columns: [], data: [], currentPage: 1, totalPage: 1, pageSize: 10,
            showPagination: true, showFilters: true,
            height: '350px',
        }
    }
    cellStyle(col) {return this.util.assign({width: col && col.width ? col.width : 'auto'}, this.theme.cellStyle)}
    get prevNextStyle() {return this.util.assign({display: 'flex', alignItem: 'center'}, this.theme.rowStyle)}

    fieldRenderer(row,i,col,j) {return this.props.fieldRenderer ? this.props.fieldRenderer(row,i,col,j) : <a>{row && row[col.field] ? row[col.field].toString() : ''}</a>}
    cellRenderer(row,i,col,j) {return this.props.cellRenderer ? this.props.cellRenderer(row,i,col,j) : <TableCell key={j} className={`cell${j}`} style={this.cellStyle(col)}>{this.fieldRenderer.call(this,row,i,col,j)}</TableCell>}
    rowRenderer(row, i) {
        if (this.props.rowRenderer) return this.props.rowRenderer(row,i)
        const rs = [<TableRow key={i} className={`row${i}`} style={this.theme.rowStyle} selected={row.selected}>
            {this.cmpProps.columns.map((col,j) => this.cmpProps.cellRenderer.call(this,row,i,col,j))}
        </TableRow>]
        if (row.expanded && this.props.rowDetailRenderer)
            rs.push(<TableRow key={i + 0.5} className={`row-detail row-detail-${i}`} style={row.expanded ? this.theme.rowStyle : {display: 'none'}}>
                <TableCell style={this.cellStyle()} colSpan={this.cmpProps.columns.length}>
                    {this.cmpProps.rowDetailRenderer.call(this,row,i)}
                </TableCell>
            </TableRow>)
        return rs
    }

    header = () =>
        <TableHeader style={{display: !this.cmpProps.showHeader ? 'none' : ''}}
            displaySelectAll={this.cmpProps.showCheckboxes}
            adjustForCheckbox={this.cmpProps.showCheckboxes}
            enableSelectAll={this.cmpProps.enableSelectAll}>
            <TableRow style={this.theme.rowStyle}>
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
    openPrevPage = () => this.onPageChage(this.cmpProps.currentPage > 0 ? this.cmpProps.currentPage - 1 : 1)
    openNextPage = () => this.onPageChage(this.cmpProps.currentPage + 1)
    onPageFieldChange = (e) => this.onPageChage(e.target.value)
    onPageChage = (page) => {
        if (page != this.cmpProps.currentPage) {
            this.cmpProps.currentPage = page
            this.setState(this.state)
            this.cmpProps.onPageChange(page)
        }
    }
    onPageSizeFieldChange = (e) => this.onPageSizeChange(e.target.value)
    onPageSizeChange = (size) => {
        if (size != this.cmpProps.pageSize) {
            this.cmpProps.pageSize = size
            this.setState(this.state)
            this.cmpProps.onPageSizeChange(size)
        }
    }
    pagination = () =>
        <TableRow style={this.util.assign({display: !this.cmpProps.showPagination ? 'none' : ''}, this.theme.rowStyle)}>
            <TableCell style={this.cellStyle()} colSpan={this.cmpProps.columns.length}>
                <div className='pagination'>
                    <div className='pagination-navi'>
                        <IconButton style={this.prevNextStyle} onClick={this.openPrevPage}><i className='material-icons'>chevron_left</i></IconButton>
                        <div className='pagination-pageInfo'>
                            <TextField type='number' min={1} style={{width: 'auto'}} step={5}
                                floatingLabelText='Page'
                                value={this.cmpProps.currentPage}
                                onChange={this.onPageFieldChange}/>
                        </div>
                        <IconButton style={this.prevNextStyle} onClick={this.openNextPage}><i className='material-icons'>chevron_right</i></IconButton>
                    </div>
                    <div className='pagination-pagesize'>
                        <TextField type='number' min={10} max={100} step={5} style={{width: 'auto'}}
                            floatingLabelText='Size'
                            value={this.cmpProps.pageSize}
                            onChange={this.onPageSizeFieldChange}/>
                    </div>
                </div>
            </TableCell>
        </TableRow>

    render = () =>
        <MaterialTable {...this.cmpStyleProps} className={this.className}>
            {this.header()}
            {this.body()}
            {this.footer()}
        </MaterialTable>
}
