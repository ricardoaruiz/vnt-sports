import React from 'react'

import './Checkbox.scss';

export default class Checkbox extends React.Component {

    static displayName = 'Checkbox';

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            checked: this.props.checked || false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({ checked: !this.state.checked });
        this.props.onChange({ 
            id: this.props.id,
            state: this.state.checked, 
            value: this.state.value
        });
    }

    render() {
        return (
            <label className="checkbox-container">
                {this.props.label}
                <input 
                    type="checkbox" 
                    id={this.props.id}
                    name={this.props.name}
                    value={this.state.value}
                    checked={this.state.checked}
                    onChange={this.handleChange}
                />
                <span className="checkbox-checkmark"></span>
            </label>
        );
    }
}