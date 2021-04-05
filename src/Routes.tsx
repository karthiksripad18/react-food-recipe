import React from 'react';
import { Route, Switch } from "react-router-dom";

import Login from './components/Login';

const Routes = () => {
    return (
        <Switch>
            <Route path="/login"><Login /></Route>
        </Switch>
    )
};

export default Routes;