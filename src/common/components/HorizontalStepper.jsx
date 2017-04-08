import React from 'react'
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper'
import Component from './Component'

class HorizontalStepper extends Component {
    get componentClassName() {return 'horizontal-stepper'}

    state = {
        stepIndex: this.stepCount ? 0 : -1,
    }

    get stepCount() {return this.props.children.length}
    get stepIndex() {return this.state.stepIndex}
    handleNext = () => this.stepIndex < this.stepCount ? this.setState({stepIndex: this.stepIndex + 1}) : false
    handlePrev = () => this.stepIndex > 0 ? this.setState({stepIndex: this.stepIndex - 1}) : false
    getTitle = (el, i) => el.props.children.reduce((v, child) => {
        return child.type == 'title' ? v = child.props.children : v
    }, i)
    getContent = (el, i) => el.props.children.reduce((v, child) => {
        return child.type == 'content' ? v = child.props.children : v
    }, i)
    render() {
        return <div className={this.className}>
            <Stepper linear={this.props.linear} activeStep={this.stepIndex}>
                {this.props.children.map((child,i) => <Step key={i}>
                    <StepButton onClick={() => this.setState({stepIndex: i})}>
                        {this.getTitle(child,i)}
                    </StepButton>
                </Step>)}
            </Stepper>
            <div className='step-content'>
                {this.stepIndex < 0 ? null : this.getContent(this.props.children[this.stepIndex], this.stepIndex)}
            </div>
        </div>
    }

}

export default HorizontalStepper
