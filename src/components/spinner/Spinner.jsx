import React from 'react';

import './Spinner.scss';
import SpinnerService from './SpinnerService';

export default class Spinner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            on: false
        }
    }

    render() {
        return (
            <div className={"spinner-overlay " + (this.state.on ? 'spinner-on' : 'spinner-off')}>
                <i className="fa fa-spinner fa-spin fa-3x"></i>
            </div>
        )
    }

    componentDidMount() {
        this.subscription = SpinnerService.subscribe(state => {
            this.setState({ on: state });
        });
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.unsubscribe()
        }
    }

}