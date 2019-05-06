import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './home';
import { Detail } from './detail';
import { Login } from './login';

export const AdminRoutes = () => {
    return (
        <Switch>
            <Route exact path="/admin" component={Home} />
            <Route exact path="/admin/detail" component={Detail} />
            <Route exact path="/admin/login" component={Login} />
        </Switch>
    );
};
