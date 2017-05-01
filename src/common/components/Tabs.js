import React from 'react'
import Button from './Button'
import Style from './Style'

class Tabs extends Style {
    componentClassName = `tabs ${this.cmpProps.vertical ? 'tabs-vertical': 'tabs-horizontal'}`
    state = {
        activeIndex: this.cmpProps.activeIndex ? this.cmpProps.activeIndex : 0,
    }
    get childCount() {return this.props.children.length}
    get activeIndex() {return this.state.activeIndex}
    handleNext = () => this.activeIndex < this.childCount ? this.setState({activeIndex: this.activeIndex + 1}) : false
    handlePrev = () => this.activeIndex > 0 ? this.setState({activeIndex: this.activeIndex - 1}) : false
    getTitle = (el, i) => el.props.children.reduce((v, child) => {
        return child.type == 'title' ? v = child.props.children : v
    }, i)
    getContent = (el, i) => el.props.children.reduce((v, child) => {
        return child.type == 'content' ? v = child.props.children : v
    }, i)
    render = () =>
        <div className={this.className} style={{display: !this.childCount ? 'none' : ''}}>
            <div className='tabs-header'>
                {this.props.children.map((tab,i) =>
                <Button key={i} onClick={() => this.setState({activeIndex: i})} label={this.getTitle(tab,i)}
                    className={`tab ${i==this.activeIndex?'active':''}`}/>)}
            </div>
            <div className='tab-content'>
                {this.getContent(this.props.children[this.activeIndex], this.activeIndex)}
            </div>
        </div>
}

export default Tabs
