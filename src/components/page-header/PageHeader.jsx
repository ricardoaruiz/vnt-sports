import React from 'react';

import './PageHeader.scss';

const PageHeader = props => {

    PageHeader.displayName = 'PageHeader';

    return (
        <div className="page-header">
            <div className="page-header_title">{props.title}</div>
            <div className="page-header_divider"></div>
        </div>
    )
}

export default PageHeader;