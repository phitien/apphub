import React from 'react'
import Style from './Style'
import SearchField from './SearchField'

export default class SelectField extends Style {
    componentClassName = 'select-field'
    placeholder = this.props.placeholder ? this.props.placeholder : ''
    noneOption = {text: this.placeholder, value: null, className: 'none-option'}
    shouldShowNoneOption = this.props.hasOwnProperty('placeholder')
    title = this.props.title
    option = (i)=> this.options[i] ? this.options[i] : this.noneOption
    open = (open) => this.refresh({open})
    onChange = (o, f) => {
        if (f || o != this.selected) {
            this.refresh({selected: o, open: false})
            if (this.props.onChanged) this.props.onChanged(o, this)
        }
    }

    init(props) {
        this.normalizeOptions = (options) => Array.isArray(options) ? options.map(o => {return typeof o == 'string' ? {value: o, text:o} : o}) :
                typeof options == 'object' ? Object.keys(options).map(k => {return {value: options[k], text: k}}) :
                []
        this.optionText = props.optionText ? props.optionText : (o) => o ? o.text : ''
        this.optionValue = props.optionValue ? props.optionValue : (o) => o ? o.value : null
        this.state.options = this.normalizeOptions(props.options)
        this.state.open = Boolean(props.open)
        this.state.searchable = Boolean(props.searchable),
        this.state.selected = this.options.find(o => this.optionValue(o) == props.value)
        this.state.selected = this.state.selected ? this.state.selected : this.noneOption
        this.style = this.util.assign({}, this.props.style)
        this.util.assign(this.style, {
            width: parseInt(props.width) ? `${parseInt(props.width)}px` : 'initial',
            minWidth: parseInt(props.minWidth) ? `${parseInt(props.minWidth)}px` : 'initial',
        })
    }
    componentDidUpdate() {
        if (this.state.open && this.searchField) this.searchField.dom.querySelector('input').focus()
    }
    postComponentDidMount() {
        addEventListener('click', (e) => {
            const select = e.target.closest('.select-field')
            if (select && select == this.dom && e.target.closest('.select-value')) this.open(true)
            else this.open(false)
        })
        if (this.selected != this.noneOption) this.onChange(this.selected, true)
    }

    get options() {return this.shouldShowNoneOption ? [this.noneOption].concat(this.state.options) : this.state.options}
    get filteredOptions() {
        return this.searchField && this.searchField.value ?
            this.options.filter(o => this.optionText(o).toLowerCase().includes(this.searchField.value.toLowerCase())) : this.options
    }
    renderOptions = (options, className) => !options ? null :
        <ul className={className}>
            {options.map((o,i) => this.renderOption(o,i))}
        </ul>
    renderOption = (o,i) =>
        <li key={i} className={`select-option ${o.className} ${this.selected == o ? 'selected' : ''}`}
            onClick={this.onChange.bind(this, o)}>
            {this.optionText(o)}
            {this.renderOptions(o.options, '')}
        </li>
    render = () =>
        <div className={this.className}>
            {!this.title ? null : <div className='select-title'>{this.title}</div>}
            <div className={`select-value ${this.selected == this.noneOption ? 'placeholder' : ''}`}>
                <div className='select-text'>{this.optionText(this.selected)}</div>
                <i className='material-icons'>arrow_drop_down</i>
            </div>
            <div className='select-dropdown' style={this.util.assign(this.style, {display: this.state.open ? '' : 'none'})}>
                {!this.state.searchable ? null : <SearchField ref={e => this.searchField = e} onChange={this.refresh}/>}
                {this.renderOptions(this.filteredOptions, '')}
            </div>
        </div>
}
