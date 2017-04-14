import React from 'react'
import Link from 'react-router'
import {Checkbox} from 'material-ui'
import {Style} from '../../../common/components'
import {Connect} from '../redux'

class BreadCrumbs extends Style {
    get componentClassName() {return 'breadcrumbs'}
    render = () => !this.props.componentTitle ? null : <div className={this.className}>
        <div className='links'>
            {this.props.breadcrumbs.map((item, i) => i != this.props.breadcrumbs.length-1 ? <h2><Link to={item.url}>{item.title}</Link></h2> : <h2>{item.title}</h2>)}
        </div>
        <Checkbox className='switch-view' title='Switch view' label='View' labelPosition='left'
            checkedIcon={<i className='material-icons'>ac_unit</i>}
            uncheckedIcon={<i className='material-icons'>grid_on</i>}
          />
    </div>
}

export default (new Connect(BreadCrumbs)).klass
