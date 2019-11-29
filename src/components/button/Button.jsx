import React from 'react';

import './Button.scss';

export default props => (
    <button className="btn"
        onClick={props.click}
        disabled={props.disabled}
    >
        {props.label}
    </button>
)