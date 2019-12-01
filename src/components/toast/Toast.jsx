import React from 'react';

import './Toast.scss';

import ToastService from './ToastService';

export default class Toast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            type: '',
            title: '',
            message: ''
        }
    }

    render() {
        return (
            <div className={"toast success " + 
                            (this.state.type) + " " +
                            (this.state.visible ? 'visible' : 'hide')
                            }>
                <div className="toast-container">
                    <div className="toast-header">
                        <i className={"toast-icon fa-2x fa fa-" + (this.state.type === 'error' ? 'bomb' : 'thumbs-up')}></i>
                        <p>{this.state.title}</p>
                        <i className={"fa fa-times toast-close " + (!this.props.dismiss ? 'visible' : '') }
                           onClick={() => this.setState({ visible: false })}
                        ></i>
                    </div>
                    
                    <p>{this.state.message}</p>                    
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.subscription = ToastService.subscribe((toastObj) => {
            this.setState({
                visible: true,
                type: toastObj.type,
                title: toastObj.title,
                message: toastObj.message
            });

            if (this.props.dismiss) {
                setTimeout(() => {
                    this.setState({
                        visible: false,
                    })
                }, this.props.dismiss);
            }
        })
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}