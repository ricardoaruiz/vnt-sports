import React from 'react';
import { withRouter } from 'react-router-dom'

import PageHeader from '../../../components/page-header/PageHeader';
import HelpBar from '../../../components/help-bar/HelpBar';
import Button from '../../../components/button/Button';
import Checkbox from '../../../components/check-box/Checkbox';
import RadioButton from '../../../components/radio-button/RadioButton';
import UserService from '../../../services/UserService';

import './UserRegistration.scss';

class UserRegistration extends React.Component {
    
    static displayName = 'UserRegistration';

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            email: '',
            city: '',
            frequency: 'always',
            weekdays: [],
            hasData: false,
            hasFullyData: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.save = this.save.bind(this);
        this.clean = this.clean.bind(this);
        this.hasData = this.hasData.bind(this);
        this.hasFullyData = this.hasFullyData.bind(this);
        this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
        this.hangleCheckboxChange = this.hangleCheckboxChange.bind(this);
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
            this.setState({ hasFullyData: this.state.username && this.state.name && this.state.email });  
        }, 100);
    }

    handleRadioButtonChange(event) {
        this.setState({ frequency: event.target.value });
    }
    
    hangleCheckboxChange(event) {
        if (!event.state) {
            this.setState({ weekdays: [ ...this.state.weekdays, event.value ] })    
        } else {
            const weekdays = [ ...this.state.weekdays ];
            weekdays.splice(weekdays.indexOf(event.value), 1)
            this.setState({ weekdays: weekdays })    
        }
    }

    render() {
        return (
            <section className="user-registration">
                <PageHeader title="Registration"/>
                <HelpBar />
                
                <form className="registration-form">
                    <div>
                        <div className="registration-input-group">
                            <label htmlFor="username">Username *</label>
                            <input className="registration-input-text" type="text" id="username" value={this.state.username} onChange={this.handleInputChange}/>
                            <span className="registration-input-error"></span>
                        </div>

                        <div className="registration-input-group">
                            <label htmlFor="name">Name *</label>
                            <input className="registration-input-text" type="text" id="name" value={this.state.name} onChange={this.handleInputChange}/>
                            <span className="registration-input-error"></span>
                        </div>
                        <div className="registration-input-group">
                            <label htmlFor="email">E-mail *</label>
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
                                    <RadioButton 
                                        label="Always"
                                        name="frequency"
                                        value="always"
                                        checked={this.state.frequency === 'always'}
                                        onChange={this.handleRadioButtonChange}

                                    />
                                </div>
                                <div>
                                    <RadioButton 
                                        label="Sometimes"
                                        name="frequency"
                                        value="sometimes"
                                        checked={this.state.frequency === 'sometimes'}
                                        onChange={this.handleRadioButtonChange}
                                    />
                                </div>
                                <div>
                                    <RadioButton 
                                        label="Never"
                                        name="frequency"
                                        value="never"
                                        checked={this.state.frequency === 'never'}
                                        onChange={this.handleRadioButtonChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="registration-group">
                            <label htmlFor="">Days os the week</label>
                            <div className="registration-group_items">
                                <div>
                                    <Checkbox 
                                        label="Sun" 
                                        value="sun" 
                                        name="sun" 
                                        id="sun"
                                        onChange={this.hangleCheckboxChange}
                                    />
                                </div>
                                <div>
                                    <Checkbox 
                                        label="Mon" 
                                        value="mon" 
                                        name="mon" 
                                        id="mon"
                                        onChange={this.hangleCheckboxChange}
                                    />
                                </div>
                                <div>
                                    <Checkbox 
                                        label="Tue" 
                                        value="tue" 
                                        name="tue" 
                                        id="tue"
                                        onChange={this.hangleCheckboxChange}
                                    />                                    
                                </div>
                                <div>
                                    <Checkbox 
                                        label="Wed" 
                                        value="wed" 
                                        name="wed" 
                                        id="wed"
                                        onChange={this.hangleCheckboxChange}
                                    />                                    
                                </div>
                                <div>
                                    <Checkbox 
                                        label="Thu" 
                                        value="thu" 
                                        name="thu" 
                                        id="thu"
                                        onChange={this.hangleCheckboxChange}
                                    />                                            
                                </div>
                                <div>
                                    <Checkbox 
                                        label="Fri" 
                                        value="fri" 
                                        name="fri" 
                                        id="fri"
                                        onChange={this.hangleCheckboxChange}
                                    />
                                </div>
                                <div>
                                    <Checkbox 
                                        label="Sat" 
                                        value="sat" 
                                        name="sat" 
                                        id="sat"
                                        onChange={this.hangleCheckboxChange}
                                    />                                    
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