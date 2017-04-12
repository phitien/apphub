import React from 'react'
import {Checkbox} from 'material-ui'
import {Component} from '../../../common/components'
import {Connect} from '../redux'

class BreadCrumbs extends Component {
    get componentClassName() {return 'breadcrumbs'}
    render = () => !this.props.componentTitle ? null : <div className={this.className}>
        <h2>{this.props.componentTitle}</h2>
        <Checkbox className='switch-view' title='Switch view' label='View' labelPosition='left'
            checkedIcon={<i className='material-icons'>ac_unit</i>}
            uncheckedIcon={<i className='material-icons'>grid_on</i>}
          />
    </div>
}

export default (new Connect(BreadCrumbs)).klass
