import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import UserList from './views/user/user-list/UserList';
import UserRegistration from './views/user/user-registration/UserRegistration';
import Posts from './views/posts/Posts';

export default props => (
    <Switch>
        <Route path="/" exact={true} component={UserList} />
        <Route path="/registration" component={UserRegistration} />
        <Route path="/posts/:userId" component={Posts} />
        <Redirect from="*" to="/" />
    </Switch>
)