import React from 'react'
import Style from './Style'
import SearchField from './SearchField'

export default class Stepper extends Style {
    componentClassName = `stepper ${this.props.autofit ? 'stepper-autofit' : ''}`
    steps = this.props.steps ? this.props.steps : []
    state = {
        current: this.props.current ? this.props.current : 0
    }
    get current() {return this.state.current}
    set current(current) {this.refresh({current})}
    jump = (i) => i > 0 && i < this.steps.length && this.steps[i].active ? this.current = i : false
    next = () => this.jump(this.current + 1)
    prev = () => this.jump(this.current - 1)
    headers = () =>
        <div className='step-headers'>
            {this.steps.map((s,i) => this.header(s,i))}
        </div>
    header = (s,i) =>
        <div key={i} className={`step-header ${s.active ? 'active' : ''}`}>
            {this.renderHeader(s,i)}
        </div>
    renderHeader = this.props.renderHeader ? this.props.renderHeader : (s,i) =>
        <div className='step-header-content'>
            <div className='step-index'><a onClick={this.jump.bind(this, i)}>{i+1}</a></div>
            <div className='step-title'>{s.title}</div>
            {this.renderHeaderExtra(s,i)}
        </div>
    renderHeaderExtra = (s,i) => this.props.renderHeaderExtra ? this.props.renderHeaderExtra(s,i) : null

    content = () => !this.renderContent(this.current) ? null :
        <div className='step-content'>
            {this.renderContent(this.current)}
        </div>
    renderContent = (i) => this.props.renderContent ? this.props.renderContent(i) : this.steps[i].content

    render = () => !this.steps ? null :
        <div className={this.className}>
            {this.headers()}
            {this.content()}
        </div>
}
