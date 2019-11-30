import React from 'react';

import './HelpBar.scss'

const HelpBar = props => {

    HelpBar.displayName = 'HelpBar';

    return (
        <section>
            <div className="help-bar">
                <div className="help-bar-item">
                    <p className="help-bar-item-title">Need Help?</p>
                    <div className="help-bar-item-description">
                        <i className="fa fa-life-ring"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <div className="help-bar-item">
                    <p className="help-bar-item-title">Why register</p>
                    <div className="help-bar-item-description">
                        <i className="fa fa-heartbeat"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <div className="help-bar-item">
                    <p className="help-bar-item-title">What people are saying...</p>
                    <div className="help-bar-item-description">
                        <i className="fa fa-smile-o"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>                        
            </div>
        </section>
    )
}

export default HelpBar;