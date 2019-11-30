import React from 'react';

import './SportStatusBar.scss';

const SportStatusBar = props => {

    SportStatusBar.displayName = 'SportStatusBar';

    return (
        <section className="sport-status-bar-background">
            <div className="sport-status-bar-container">

                <div className="sport-status-bar_item">
                    <i className='fa fa-puzzle-piece'></i>
                    <div className="sport-status-bar_item-content">
                        <p>Sport type</p>
                        <p>Cycling</p>
                    </div>
                </div>

                <div className="sport-status-bar_item">
                    <i className='fa fa-trophy'></i>
                    <div className="sport-status-bar_item-content">
                        <p>Mode</p>
                        <p>Advanced</p>
                    </div>
                </div>

                <div className="sport-status-bar_item">
                    <i className='fa fa-map-signs'></i>
                    <div className="sport-status-bar_item-content">
                        <p>Route</p>
                        <p>30 Miles</p>
                    </div>
                </div>                        

            </div>
        </section>
    )
}

export default SportStatusBar;