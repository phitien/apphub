import React from 'react'
import {Toggle} from 'material-ui'
import Component from '../../../common/components/Component'
import Connect from '../redux/Connect'
import SidebarRightCollapseButton from './SidebarRightCollapseButton'

class SidebarRightSearch extends Component {
    get componentClassName() {return `sidebar-right-search`}
    get columns() {return this.props.dataElementColumns}
    onToggle(item, e, checked) {
        item.show = checked
        this.setState(this.state)
    }
    renderColumnsSelection() {return
        <div className='columns-selection'>
            <div className='choices'>
                {this.columns.filter(item => item.optional).map((item,i) =>
                <Toggle key={i} className='choice' labelPosition='right'
                    label={item.name} toggled={item.show} disabled={!item.optional}
                    onToggle={this.onToggle.bind(this, item)}/>)}
            </div>
        </div>
    }
    render() {return
        <div className={this.className}>
            <SidebarRightCollapseButton/>
            <div className='view-toolbar-settings'>
                {this.renderColumnsSelection()}
            </div>
        </div>
    }
}

export default (new Connect(SidebarRightSearch)).klass
