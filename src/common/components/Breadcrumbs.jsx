import React from 'react'
import Link from 'react-router'
import Style from './Style'

export default class Breadcrumbs extends Style {
    get componentClassName() {return 'breadcrumbs'}
    get extra() {return null}
    render = () => <div className={this.className}>
        <div className='links'>
            {!this.props.breadcrumbs ? null : this.props.breadcrumbs.map((item, i) => i != this.props.breadcrumbs.length-1 ? <h2><Link to={item.url}>{item.title}</Link></h2> : <h2>{item.title}</h2>)}
        </div>
        {this.extra}
    </div>
}
