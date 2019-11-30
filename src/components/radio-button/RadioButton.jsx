import React from 'react'

import './RadioButton.scss';

export default class RadioButton extends React.Component {

    static displayName = 'RadioButton';
    
    render() {
        return (
            <label className="radio-container">
                {this.props.label}
                <input 
                    type="radio" 
                    { ...this.props }
                />
                <span className="radio-checkmark"></span>
            </label>
        )
    }

}