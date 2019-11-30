import React from 'react'

import './InputText.scss';

export default class InputText extends React.Component {

    static displayName = 'InputText';

    constructor(props) {
        super(props)

        this.state = {
            focus: false
        }
    }

    render() {
        return (
            <div className="input-group">
                
                <label htmlFor={this.props.id}>
                    {this.props.label}
                </label>
                
                <input 
                    type="text" 
                    id={this.props.id} 
                    className="input-text" 
                    value={this.props.value} 
                    onChange={this.props.onChange}
                    onFocus={() => this.setState({ focus: true })}
                    onBlur={() => this.setState({ focus: false })}
                />

                <span className={"input-info " + (this.state.focus ? 'input-info-visible' : '')}>
                    {this.props.info}
                </span>
            </div>

        )
    }

}