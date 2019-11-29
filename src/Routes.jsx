import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import UserList from './views/user/user-list/UserList';
import UserRegistration from './views/user/user-registration/UserRegistration';

export default props => (
    <Switch>
        <Route path="/" exact={true} component={UserList} />
        <Route path="/registration" component={UserRegistration} />
        <Redirect from="*" to="/" />
    </Switch>
)