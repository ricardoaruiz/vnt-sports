import React from 'react';

import './PageHeader.scss';

export default props => (
    <div className="page-header">
        <div className="page-header_title">{props.title}</div>
        <div className="page-header_divider"></div>
    </div>
)