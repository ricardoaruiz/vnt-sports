import React from 'react';

import './Button.scss';

const Button = props => {

    Button.displayName = 'Button';

    return (
        <button className="btn"
            onClick={props.click}
            disabled={props.disabled}
        >
            {props.label}
        </button>
    )
}

export default Button;