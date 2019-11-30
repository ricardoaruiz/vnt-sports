import React from 'react';

import './BreadCrumb.scss';

const BreadCrumb = props => {

    BreadCrumb.displayName = 'BreadCrumb';

    return (
        <div className="breadcrumb-background">
            <div className="breadcrumb-container">
                <i className="fa fa-home breadcrumb-container_home"></i>
                <i className="fa fa-chevron-right breadcrumb-container_arrow"></i>
                <span>Page Name</span>
                <i className="fa fa-chevron-right breadcrumb-container_arrow"></i>
                <span>Breadcrumb</span>
                <i className="fa fa-chevron-right breadcrumb-container_arrow"></i>
                <span>Current Page</span>
            </div>
        </div>
    )
}

export default BreadCrumb;