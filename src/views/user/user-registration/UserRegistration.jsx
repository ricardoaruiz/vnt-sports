import React from 'react';
import { withRouter } from 'react-router-dom'

import PageHeader from '../../../components/page-header/PageHeader';
import Button from '../../../components/button/Button';
import UserService from '../../../services/UserService';

import './UserRegistration.scss';

class UserRegistration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            email: '',
            city: '',
            hasData: false,
            hasFullyData: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.save = this.save.bind(this);
        this.clean = this.clean.bind(this);
        this.hasData = this.hasData.bind(this);
        this.hasFullyData = this.hasFullyData.bind(this);
        
    }

    handleInputChange(event) {
        const { id, value } = event.target;
        this.setState({ [id]: value });
        this.hasData();
        this.hasFullyData();
    }

    save() {
        UserService.save(this.state)
            .then(() => {
                this.clean();
                alert('user created');
            })
            .catch(error => console.log('error', error));
    }

    clean() {
        this.setState({
            username: '',
            name: '',
            email: '',
            city: ''
        });
        this.hasData();
        this.hasFullyData();
    }

    hasData() {
        setTimeout(() => {
            this.setState({ hasData: this.state.username || this.state.name || this.state.email || this.state.city});  
        }, 100);
    }

    hasFullyData() {
        setTimeout(() => {
            this.setState({ hasFullyData: this.state.username && this.state.name && this.state.email && this.state.city});  
        }, 100);
    }

    render() {
        return (
            <section className="user-registration">
                <PageHeader title="Registration"/>
                
                <form className="registration-form">
                    <div>
                        <div className="registration-input-group">
                            <label htmlFor="username">Username</label>
                            <input className="registration-input-text" type="text" id="username" value={this.state.username} onChange={this.handleInputChange}/>
                            <span className="registration-input-error"></span>
                        </div>

                        <div className="registration-input-group">
                            <label htmlFor="name">Name</label>
                            <input className="registration-input-text" type="text" id="name" value={this.state.name} onChange={this.handleInputChange}/>
                            <span className="registration-input-error"></span>
                        </div>
                        <div className="registration-input-group">
                            <label htmlFor="email">E-mail</label>
                            <input className="registration-input-text" type="text" id="email" value={this.state.email} onChange={this.handleInputChange}/>
                            <span className="registration-input-error"></span>
                        </div>                         
                    </div>
                    <div>
                        <div className="registration-input-group">
                            <label htmlFor="city">City</label>
                            <input className="registration-input-text" type="text" id="city" value={this.state.city} onChange={this.handleInputChange}/>
                            <span className="registration-input-error"></span>
                        </div>

                        <div className="registration-group">
                            <label htmlFor="">Ride in group?</label>
                            <div className="registration-group_items">
                                <div>
                                    <input type="radio" name="frequency" id="always" value="always"/>Always
                                </div>
                                <div>
                                    <input type="radio" name="frequency" id="sometimes" value="sometimes"/>Sometimes
                                </div>
                                <div>
                                    <input type="radio" name="frequency" id="never" value="never"/>Never
                                </div>
                            </div>
                        </div>

                        <div className="registration-group">
                            <label htmlFor="">Days os the week</label>
                            <div className="registration-group_items">
                                <div>
                                    <input type="checkbox" name="Sun" id="sun"/>Sun
                                </div>
                                <div>
                                    <input type="checkbox" name="Mon" id="mon"/>Mon
                                </div>
                                <div>
                                    <input type="checkbox" name="Tue" id="tue"/>Tue
                                </div>
                                <div>
                                    <input type="checkbox" name="Wed" id="wed"/>Wed
                                </div>
                                <div>
                                    <input type="checkbox" name="Thu" id="thu"/>Thu
                                </div>
                                <div>
                                    <input type="checkbox" name="Fri" id="fri"/>Fri
                                </div>
                                <div>
                                    <input type="checkbox" name="Sat" id="sat"/>Sat
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
                <div className="registration-actions">
                    <Button label="Save" click={this.save} disabled={ !this.state.hasFullyData }/>
                    <Button label="Discard" click={this.clean} disabled={ !this.state.hasData }/>
                    <Button label="Back" click={() => this.props.history.push('/')}/>
                </div>
            </section>
        )
    }
}

export default withRouter(UserRegistration);