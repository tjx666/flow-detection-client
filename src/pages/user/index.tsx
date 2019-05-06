import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './home';
import { Recommend } from './recommend';

export const UserRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recommend" component={Recommend} />
        </Switch>
    );
};
